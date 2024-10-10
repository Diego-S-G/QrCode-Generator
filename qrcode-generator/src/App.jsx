import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrCode(event) {
    setLink(event.target.value);
    handleGenerate(event.target.value);
  }
  return (
    <div className='container'>
      <QRCode
        value={link}
      />
      <input
        className='input'
        placeholder='Insira seu texto ou link aqui...'
        value={link}
        onChange={(event) => handleQrCode(event)}
      />
     {link ? (
        <a href={qrcodeLink} download={`qrcode.png`}>Baixar QrCode</a>
      ) : (
        <a className="disabled-link">Insira um texto ou link para gerar o QR Code</a>
      )}
    </div>
  );
}

export default App;
