import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Oi, sou o Nicoletti
          </h1>
          <p className="text-gray-500">Estou treinando Creative Development</p>
          <p className="mt-3">Esse tutorial foi feito pelo Wawa Sensei</p>
        
          <p className="animate-bounce  mt-6">↓ Scroll to read more ↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Nesse tutorial usamos 🔥
          </h1>
          <p className="text-gray-500"></p>
          <p className="mt-3">
            <b>React 🚀</b>
          </p>
          <ul className="leading-9">
            <li>React Three Fiber</li>
            <li>Gsap</li>
            <li>GLTF</li>
            <li></li>
          </ul>
          <p className="mt-3">
            <b>Os modelos do blender já foram feitos por ele. 🔬</b>
          </p>
          <ul className="leading-9">
          
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
          Contato:
          </h1>
          
          
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
          Aqui esta o github do autor:<br />
           <a href="https://github.com/wass08">github.com/wass08</a>
          </p>
          
           
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
          E o meu caso queiram estudar juntos: <br/>
          <a href="https://github.com/luiginicoletti">github.com/luiginicoletti</a>
          </p>
          
        </Section>
      </div>
    </Scroll>
  );
};