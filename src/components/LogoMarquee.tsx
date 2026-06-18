import Image from "next/image";

const CLIENTS = [
  {
    src: "/reference/OPToRxvhQd2ScvavfIOXuI6o.svg",
    alt: "Velo Studio",
    width: 194,
    height: 37,
  },
  {
    src: "/reference/Ntc48i8GxNtzZe6K8P7DeRLzQ.svg",
    alt: "Urban Bites",
    width: 256,
    height: 42,
  },
  {
    src: "/reference/9XfpXOcQrpiKYnZNcFlnYhYZVI.svg",
    alt: "Baseline Sports",
    width: 256,
    height: 42,
  },
  {
    src: "/reference/2rq9YMILXCGw0qOqXvxaPhzIuWo.svg",
    alt: "Northcap Supply",
    width: 279,
    height: 42,
  },
  {
    src: "/reference/rHPu3YfQxZrz1Xw15tIQTPQIsU.svg",
    alt: "Velo Studio",
    width: 222,
    height: 40,
  },
  {
    src: "/reference/OEklTYyEPGkk7846aK5rBd4nfcs.svg",
    alt: "Logoipsum",
    width: 220,
    height: 37,
  },
];

export default function LogoMarquee() {
  return (
    <section className="marquee-mask overflow-hidden bg-background py-5 sm:py-6">
      <div className="marquee-track flex w-max items-center pl-5 sm:pl-8">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-5 pr-5 sm:gap-6 sm:pr-6"
          >
            {CLIENTS.map((client) => (
              <li
                key={`${copy}-${client.src}`}
                className="flex h-[132px] w-[262px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] border border-[#0612181f] bg-background"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  loading={copy === 0 ? "eager" : "lazy"}
                  className="h-[52px] w-[160px] object-contain"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
