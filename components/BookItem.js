export default function BookItem({ image, amazonLink, apressLink, children, year, title, subtitle }) {
  return (
    <section className="m-4 lg:m-12 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
      <img src={image} className="max-h-72 lg:max-h-96 mx-auto border dark:border-white border-gray-700 shadow-xl" />
      <div className="flex flex-col items-center lg:items-start w-full space-y-4">
        <h2 className="text-center lg:text-left text-3xl lg:text-4xl my-2 font-thin">{title} ({year})</h2>
        <h3 className="text-xl my-2">{subtitle}</h3>
        <p>
          {children}
        </p>
        <div className="flex flex-col items-center w-full">
          <a className="bg-blue-700 transition hover:bg-blue-600 m-2 px-4 py-2 w-full lg:w-96 text-center rounded-full text-white" href={amazonLink}>Buy from Amazon</a>
          <a className="bg-blue-700 transition hover:bg-blue-600 m-2 px-4 py-2 w-full lg:w-96 text-center rounded-full text-white" href={apressLink}>Buy from Apress</a>
        </div>
      </div>
    </section>
  );
}
