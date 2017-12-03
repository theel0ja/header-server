const express = require('express');

const app = express();
app.disable('x-powered-by');

app.use((req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(req.headers, null, 2));
});

if (app.get('env') !== 'test') {
    const port = process.env.PORT || 5000;
  
    app.listen(port, () => {
      console.log('Listening on port ' + port);
    });
}
