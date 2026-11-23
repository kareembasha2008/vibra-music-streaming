const http = require('http');
const fs = require('fs');
const path = require('path');

let DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.ico': 'image/x-icon'
};

function createServerInstance() {
  return http.createServer((req, res) => {
    // Parse URL & normalize path
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath === '/' || reqPath === '') {
      reqPath = '/index.html';
    }

    const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(__dirname, safePath);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end(`404 Not Found: ${reqPath}\nVIBRA Music Platform: Please verify the requested file exists in the project root.`);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      // Support HTTP Range requests for smooth audio scrubbing and seeking
      const range = req.headers.range;
      if (range && (ext === '.wav' || ext === '.mp3')) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
        const chunkSize = (end - start) + 1;
        const fileStream = fs.createReadStream(filePath, { start, end });

        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${stats.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': contentType,
          'Access-Control-Allow-Origin': '*'
        });
        fileStream.pipe(res);
        return;
      }

      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });

      fs.createReadStream(filePath).pipe(res);
    });
  });
}

function startServer(portToTry) {
  const srv = createServerInstance();

  srv.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️  [Port Conflict Error]: Port ${portToTry} is already in use by another program.`);
      const nextPort = portToTry + 1;
      console.log(`🔄 [Auto-Recovery]: Automatically attempting failover to port ${nextPort}...`);
      startServer(nextPort);
    } else {
      console.error(`❌ [Localhost Server Error]:`, err.message);
    }
  });

  srv.listen(portToTry, () => {
    console.log(`\n======================================================`);
    console.log(`🎵 VIBRA - Feel the Music. Live the Moment.`);
    console.log(`======================================================`);
    console.log(`🚀 Server successfully running at: http://localhost:${portToTry}/`);
    console.log(`🔊 High-Fidelity Audio Engine: Ready (Range Streaming Supported)`);
    console.log(`📁 Press Ctrl+C to stop the server.`);
    console.log(`======================================================\n`);
  });
}

startServer(DEFAULT_PORT);
