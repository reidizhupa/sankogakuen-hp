'use client';

export default function GoogleMap() {
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '20px', 
      width: '100%', 
      margin: '20px 0' 
    }}>
      {/* 左側：Google Map */}
      <div style={{ flex: '1 1 450px', minHeight: '350px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.281709785447!2d139.69239067578727!3d35.67006487259074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb479620a33%3A0x34bcc78ce7f8bf3e!2z5Luj44CF5pyo5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1781570122971!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '350px', borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 右側：場所の詳細情報 */}
      <div style={{ 
        flex: '1 1 300px', 
        padding: '20px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
          開催概要
        </h2>
        
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>イベント名:</strong> 首都圏三幸フェスティバル
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>日程:</strong> 
            <span style={{ display: 'block', paddingLeft: '15px' }}>
              ・2026年9月14日(月) 会場設営・リハーサル
            </span>
            <span style={{ display: 'block', paddingLeft: '15px' }}>
              ・2026年9月15日(火) 本番
            </span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>赤団スローガン:</strong> 笑顔・元気・メリハリ
          </li>
        </ul>

        <div style={{ marginTop: '20px' }}>
          <a 
            href="https://maps.google.com/maps?ll=35.670065,139.694966&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=3800131593595043646" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#d32f2f', // 赤団カラー
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Googleマップで開く
          </a>
        </div>
      </div>
    </div>
  );
}