import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Hakkımızda</h1>
      <p style={styles.paragraph}>
        MyBookstore'a hoş geldiniz! Burası, kitaplarla ilgili her şeyin bulunduğu bir numaralı kaynağınız. Size en iyi okuma materyallerini sunmak için buradayız. Kalite, müşteri hizmetleri ve özgünlük konularında odaklanmış durumdayız.
      </p>
      <p style={styles.paragraph}>
        MyBookstore, 2023 yılında kuruldu. İlk başladığımızda, kitaplara olan tutkumuz bizi derin bir araştırma yapmaya yöneltti, böylece MyBookstore size dünyanın en gelişmiş online kitapçısını sunabilir. Şimdi ülke genelinde müşterilere hizmet veriyoruz ve bu tutkumuzu kendi web sitemize dönüştürebildiğimiz için çok mutluyuz.
      </p>
      <p style={styles.paragraph}>
        Ürünlerimizi sunmaktan aldığımız keyfi, sizlerin de aynı şekilde keyifle karşılayacağınızı umuyoruz. Herhangi bir sorunuz veya geri bildiriminiz olursa, lütfen bizimle iletişime geçmekten çekinmeyin.
      </p>
      <p style={styles.signature}>
        Saygılarımızla,<br />
        MyBookstore Ekibi
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  header: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  signature: {
    fontSize: '18px',
    fontStyle: 'italic',
    marginTop: '40px',
    textAlign: 'right',
  },
};

export default About;
