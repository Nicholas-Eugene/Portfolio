angular.module('portfolioApp', [])
  .controller('PortfolioController', function($scope) {
    $scope.education = [
      {
        school: 'SD Tarakanita 4 Pluit',
        year: '2010 - 2016',
        description: 'SD Tarakanita 4 Pluit adalah sekolah dasar swasta di Jakarta di bawah Yayasan Tarakanita. Sekolah ini dikenal dengan pendidikan berkualitas dan nilai-nilai Kristiani, serta memiliki fasilitas lengkap dan berbagai kegiatan ekstrakurikuler.',
        photo: 'img/education/sd.jpg',
      },
      {
        school: 'SMP Tarakanita 2 Pluit',
        year: '2016 - 2019',
        description: 'SMP Tarakanita 2 Pluit adalah sekolah menengah pertama swasta di Jakarta dengan kualitas pendidikan tinggi. Menekankan pengembangan karakter dan prestasi akademik, sekolah ini memiliki fasilitas modern dan berbagai kegiatan ekstrakurikuler.',
        photo: 'img/education/smp.jpg',
      },
      {
        school: 'SMA Tarakanita 2 Pluit',
        year: '2019 - 2022',
        description: 'SMA Tarakanita 2 Pluit adalah sekolah menengah atas swasta di Jakarta yang terkenal dengan reputasi akademik baik. Dengan fasilitas lengkap dan kurikulum yang berorientasi pada pengembangan kompetensi, sekolah ini mencetak lulusan yang unggul dalam akademik dan karakter.',
        photo: 'img/education/sma.jpg',
      },
      {
        school: 'Universitas Tarumanagara',
        year: '2022 - Sekarang',
        description: 'Universitas Tarumanagara (UNTAR) adalah universitas swasta terkemuka di Indonesia, didirikan pada tahun 1959. UNTAR menawarkan program studi berkualitas dengan fasilitas modern dan aktif dalam kegiatan penelitian, pengabdian masyarakat, dan kerjasama internasional.',
        photo: 'img/education/untar.jpeg',
      }
    ];

    $scope.projects = [
      {
        title: 'Billiard Booking Website',
        details: 'A Billiard Booking Website that has a shop inside of it that uses laravel 10',
        link: 'https://github.com/Nicholas-Eugene/blackpool'
      },
      {
        title: 'Movie Ticket Booking Website',
        details: 'A Movie Ticket Booking Website that has a shop inside of it that uses Node Js',
        link: 'https://github.com/S0lut/xxxCinemas'
      },
      {
        title: 'Loyalty Mall Membership application',
        details: 'A Mobile Application for loyalty mall membership program that uses flutter and firebase',
        link: 'https://github.com/NathhKenn/Mall-Loyalty-Member'
      }
    ];

    $scope.skills = [
      { name: 'Python', image: 'img/skills/python.png' },
      { name: 'Java', image: 'img/skills/java.png' },
      { name: 'C++', image: 'img/skills/cplusplus.png' },
      { name: 'HTML', image: 'img/skills/html.png' },
      { name: 'CSS', image: 'img/skills/css.png' },
      { name: 'JavaScript', image: 'img/skills/javascript.png' },
    ]
  });