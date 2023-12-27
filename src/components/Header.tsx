export default function Header() {
  return (
    <div
      className="bg-gradient-to-b from-UbLightGray from-45% to-UbGray w-full
      h-fit flex flex-col items-center justify-start pt-1 px-2 gap-2"
    >
      <p
        className="text-stone-50 font-bold shadow-stone-950 text-lg
        w-full text-center truncate"
      >
        hiago_isoppo@portifólio:~/em_construção
      </p>
      <div
        className="flex w-full items-start gap-4 text-stone-50 font-light"
      >
        <a
          href="https://www.linkedin.com/in/hiagoisoppo/"
          target="_blank"
          rel="noreferrer"
          className="hover:font-normal"
        >
          Linkedin
        </a>

        <a
          href="https://github.com/hiagoisoppo"
          target="_blank"
          rel="noreferrer"
          className="hover:font-normal"
        >
          Github
        </a>

        <a
          href="mailto:hiagoisoppotrajano@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:font-normal"
        >
          Email
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5548920003855"
          target="_blank"
          rel="noreferrer"
          className="hover:font-normal"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
