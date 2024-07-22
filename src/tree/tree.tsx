// import '/index.css';

function Tree() {
  return (
    <div className="bg-[url('/backgroundImage.jpg')] bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col items-center justify-center font-medium">
      <div className="container text-center mt-5 w-[80%]">
        <img
          src="/pekanit-logo.png"
          className="mb-4 transform transition-transform hover:scale-110 relative left-1/2 -translate-x-1/2"
          alt="Profile Image"
          style={{ width: "200px", height: "200px" }}
        />
        <h1 className="mb-4 text-3xl">Pekan IT 2024</h1>
        <p className="mb-5">
          Pekan IT adalah kegiatan keilmuan yang diadakan oleh Himpunan
          Mahasiswa Informatika Unsika (HIMTIKA) yang didalamnya terdapat 3
          agenda yaitu Perlombaan, Seminar dan Workshop Skala Nasional.
        </p>
        <div className="list-group flex flex-col items-center">
          <a
            href="https://example.com/link1"
            className="btn btn-custom btn-lg custom-link mt-3 transition-transform transform hover:scale-105 border-4 border-white rounded-full px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black font-bold"
          >
            Link Grup Umum Pekan IT
          </a>
          <a
            href="https://example.com/link2"
            className="btn btn-custom btn-lg custom-link mt-3 transition-transform transform hover:scale-105 border-4 border-white rounded-full px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black font-bold"
          >
            Link Guidebook Lomba
          </a>
          <a
            href="https://example.com/link3"
            className="btn btn-custom btn-lg custom-link mt-3 transition-transform transform hover:scale-105 border-4 border-white rounded-full px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black font-bold"
          >
            Link Pendaftaran Perlombaan
          </a>
          <a
            href="https://example.com/link4"
            className="btn btn-custom btn-lg custom-link mt-3 transition-transform transform hover:scale-105 border-4 border-white rounded-full px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black font-bold"
          >
            Link Pendaftaran Seminar
          </a>
          <a
            href="https://example.com/link5"
            className="btn btn-custom btn-lg custom-link mt-3 transition-transform transform hover:scale-105 border-4 border-white rounded-full px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black font-bold"
          >
            Link Pendaftaran Workshop
          </a>
        </div>
      </div>
      <footer className="text-center mt-4 py-2">
        <p className="text-sm">&copy; 2024 Pekan IT. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Tree;
