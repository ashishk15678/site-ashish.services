"use client";
import { Comp } from "@/components/comp";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
const poppings = Poppins({ weight: "900", subsets: ["latin"] });

export default function Page() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(20);
  const [change, setChange] = useState(false);
  const logs = (message) => {
    console.log(`%c${message}`, "background: green; color: white");
  };

  const logr = (message) => {
    console.log(`%c${message}`, "background: red; color: black");
  };

  useEffect(() => {
    const observe = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setChange(true);
            logs("Intersecting");
          } else {
            setChange(false);
            logr("Not Intersecting");
          }
        });
      },
      {
        root: document.getElementById("nav-area"),
        rootMargin: "0px",
        threshold: 1,
      }
    );

    window.addEventListener(
      "load",
      () => {
        observe.observe(document.getElementById("nav-area"));
      },
      false
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={
          "fixed z-[98] w-[100%] md:h-[100px] top-10 grid place-items-center cursor-none transition-all text-zinc-200 "
        }
      >
        <div
          className={
            " w-[80%] px-4  rounded-[200px] outline outline-2 outline-white outline-offset-4 float-right transition-all hover:bg-zinc-900/80 shadow-white shadow-lg hover:text-white duration-700 "
          }
          onMouseEnter={() => setSize(40)}
          onMouseLeave={() => setSize(20)}
        >
          <div className=" h-full flex flex-row py-4">
            {["Home", "About", "Services", "Contact"].map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    "w-full h-full flex flex-row text-center text-2xl font-bold "
                  }
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: position.y - 20,
          left: position.x - 10,
          width: size,
          height: size,
          borderRadius: "50%",
          mixBlendMode: "difference",
          background: size == 20 ? "white" : "#bdbcbb",
          transition: "all",
          animationDuration: "200ms",
          pointerEvents: "none",
          zIndex: 1000,
          cursor: "none",
          display: "grid",
          placeItems: "center",
        }}
      ></div>
      <div className="w-full h-full">
        <div className="w-full h-[100dvh] cursor-none grid place-items-center relative overflow-hidden">
          <div
            id="nav-area"
            className="absolute z-[-99] object-cover overflow-hidden"
          >
            <Image
              src={
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3hld29hNGthYmZ4bHA0MGRpeTBpZmhudGtqeWY3dXMwajY0eGhtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JoVV55m3KZHdxlpFZ6/giphy.webp"
              }
              height={800}
              width={3500}
              alt=""
              priority
              className="blur-2xl relative object-fill overflow-hidden"
            />
          </div>
          {/* <div className="absolute left-28 top-12 text-xl">
            <div className="text-yellow-500 font-extrabold">
              ashish.services
            </div>
          </div> */}
          <div className="lg:text-[8rem] md:text-[4rem] text-[2rem] absolute text-w text-zinc-500">
            <p className={("", poppings.className)}>Hii , I AM ASHISH</p>
            <div className="text-change">
              <p className={("", poppings.className)}>Hii , I AM ASHISH</p>
            </div>
            <p className={("", poppings.className)}>Hii , I AM ASHISH</p>
          </div>
        </div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        repudiandae, molestias perferendis accusamus amet deserunt voluptates
        enim, obcaecati cumque velit molestiae voluptatum doloremque asperiores
        sint adipisci maxime, deleniti laborum a? Iure nesciunt perferendis
        voluptates laboriosam necessitatibus harum corporis maiores rem minima
        distinctio error totam vitae atque, quibusdam, laudantium aliquid
        dolorem exercitationem eveniet reprehenderit, asperiores beatae
        consectetur quia et sint! Neque! Dolore, consequatur ratione
        perspiciatis repudiandae earum optio placeat porro commodi quibusdam
        nostrum, et, nulla officia aut corrupti? Amet nobis molestiae odio
        reiciendis consectetur assumenda hic perferendis voluptatem recusandae,
        enim in! Sint maiores magnam cupiditate nisi obcaecati quam neque
        temporibus veniam? Eos quidem placeat sequi suscipit sint. Voluptates,
        minima consequuntur maxime dignissimos nulla commodi. Ullam accusantium
        quas facilis hic ipsa corporis. Repellendus tempora facilis adipisci aut
        nesciunt in magni optio qui quod assumenda quas perferendis soluta
        laboriosam possimus perspiciatis laudantium voluptatibus nobis dolorum
        numquam hic aliquam, fuga voluptas? Saepe, provident voluptas!
        Laboriosam magni minima debitis deleniti fugiat exercitationem expedita
        provident alias quaerat asperiores voluptas maxime laborum placeat,
        dolor suscipit possimus nesciunt quam, dolores unde dignissimos id quod
        architecto. Dignissimos, atque nemo. Atque, omnis. Commodi, delectus
        deserunt nulla ratione ullam quis repellendus veniam, quo quia, ipsam
        consequatur laborum deleniti fugit nisi qui expedita. Voluptas sunt
        soluta deleniti quo amet minus libero reiciendis. Molestias odit eveniet
        commodi, officia, sit dolorum molestiae sint voluptates harum dolore
        minus. Enim unde praesentium molestiae magni facere sit voluptatibus
        aliquid quod sed voluptate. Provident eos quaerat dignissimos
        aspernatur! Laboriosam officia quasi dicta vitae asperiores! Tempore
        voluptatem possimus corporis, at aspernatur quam dignissimos beatae sed
        similique adipisci natus perspiciatis ipsa repellat consectetur
        doloremque. A dolorem perferendis ea quam rem! Optio sint accusantium
        iusto fuga dicta adipisci enim vel ratione ipsum repudiandae quia neque
        debitis laboriosam tenetur perspiciatis aliquid quas in delectus rem ex,
        veniam dolores beatae! Similique, sunt fuga. Perferendis magnam
        quibusdam sunt natus repudiandae accusantium maiores deleniti, explicabo
        quam placeat accusamus modi consequatur sed iste vitae sapiente
        recusandae animi, a nihil, provident ab! Consequuntur numquam ad
        reiciendis inventore. Quisquam provident aspernatur quos ipsa accusamus,
        officia molestiae mollitia vero nobis placeat harum repellendus dicta
        earum veniam rem iste, cumque a? Rerum eveniet nisi quibusdam eaque cum.
        Similique, explicabo officiis. Molestiae porro eligendi dolorum eum quia
        repellat quae voluptates non minus numquam incidunt consequatur magnam
        doloremque eius nesciunt illo, ex, suscipit earum veniam beatae aliquam
        dolores magni corporis enim. Sint. Ab exercitationem consequatur quo
        minus quam optio aspernatur modi libero, molestias id at rerum,
        doloribus unde eaque dolores atque fugiat. Aperiam, repellat cumque
        laborum provident obcaecati expedita eius culpa voluptatibus. Laudantium
        soluta qui quod quo quibusdam dolore blanditiis temporibus ea?
        Cupiditate soluta autem eligendi, doloremque asperiores porro corrupti
        quibusdam, placeat error neque temporibus eveniet ipsa. Deleniti
        deserunt et nisi. Porro. Vitae amet ipsum sequi minus similique rerum
        veniam aperiam, cum quam at quos voluptate aliquam fugiat enim iusto
        porro ad rem voluptates. Temporibus iure possimus excepturi
        necessitatibus dolor, atque deserunt? Eos, ut pariatur! Dolor
        voluptatibus amet nulla necessitatibus cumque labore molestiae fugiat
        autem, molestias suscipit atque, velit cum! Cumque neque optio cum nobis
        blanditiis temporibus eaque corrupti iste aperiam magni? Quaerat quas
        alias, labore quisquam rerum accusamus! Quibusdam aliquid commodi
        asperiores quo esse facilis eveniet officia nulla inventore modi, non
        aperiam perferendis minima libero nobis, consectetur architecto
        consequuntur cupiditate laudantium. Consequuntur voluptatibus odio
        commodi aliquam minus beatae similique laborum veritatis non harum
        magni, culpa ipsam voluptatem consequatur error. Est saepe molestiae
        accusamus perspiciatis ipsa. Delectus facilis excepturi magni ratione
        vitae. Sed aliquid iste ea molestias harum doloremque necessitatibus et
        laboriosam animi repellendus quia maiores doloribus perspiciatis quaerat
        quam quas ullam nostrum impedit eveniet in sint excepturi, sit fuga
        similique. Eaque? Rem quaerat quam doloribus quidem! Accusamus qui rem
        suscipit eos distinctio. At iusto, optio assumenda neque fuga debitis
        itaque ullam fugiat possimus dolore similique placeat ipsum dicta vel
        nulla quos. Voluptatem animi amet enim exercitationem atque fugit. Quo
        iure cumque quas nihil eveniet dignissimos, rerum ipsa quia totam
        perspiciatis! Qui expedita illum reiciendis nobis ea dolore, quod quam
        aperiam repellendus? Molestiae odit quod excepturi! Mollitia voluptatem
        dicta porro enim debitis adipisci, odit eaque laborum quidem repudiandae
        in doloribus rem nemo perferendis perspiciatis. Sed illo fuga,
        repudiandae praesentium impedit porro fugiat! Ipsum sint veniam
        aspernatur perspiciatis tempora, quis accusamus nesciunt delectus est.
        Quasi, expedita! Quos neque architecto necessitatibus laudantium, quam
        eos aliquid esse error odio, a porro nobis in magni nihil. Dignissimos
        sequi, nobis perferendis neque iure nostrum velit tempore maxime
        distinctio voluptate fugit blanditiis rerum dolor vero laudantium. Ipsum
        deleniti eveniet sequi mollitia rerum neque sint cumque amet temporibus
        soluta. Nulla culpa consequatur quae magnam possimus assumenda, minima,
        facilis sunt labore commodi earum alias quasi. Officiis, molestias?
        Omnis voluptas quidem reprehenderit, similique laudantium deserunt
        asperiores, nemo commodi veniam, consequatur inventore! Nam asperiores
        corrupti ex vero quae culpa laborum repellendus est animi, quia quod
        cupiditate porro velit, accusamus dolorum libero, voluptatibus similique
        veritatis in! Quod quis est dolore blanditiis, sint accusamus? Culpa,
        consequuntur, eaque sequi totam amet impedit, ducimus similique
        accusantium repellat rem quasi nisi tempora quos illum harum accusamus
        iste. Aspernatur sequi recusandae nulla quisquam eos ab minus temporibus
        repellat. Dolor omnis et esse nemo quisquam voluptatibus explicabo
        voluptatum iure perferendis consequuntur tempore, earum exercitationem
        maiores quae, hic eius sit quam architecto. Sit, blanditiis! Nesciunt
        nostrum porro adipisci eos aspernatur. Voluptates, tempora fuga quidem
        obcaecati ut, minus non debitis distinctio blanditiis iste quasi nulla
        numquam alias dolor pariatur reiciendis ipsam enim. Quas earum
        necessitatibus corporis maxime doloremque ad tempore reprehenderit.
        Commodi deleniti, eos numquam illo soluta quod unde quibusdam culpa.
        Rerum optio adipisci eius ad quia consequatur minima corrupti ex
        asperiores. Ipsam, est labore. Quis, ducimus recusandae. Officia, non
        porro? Quisquam, exercitationem! Obcaecati ipsam unde in quia repellat,
        quis quidem? Laudantium deleniti ducimus placeat libero. Qui neque
        distinctio, iure voluptatum illum ex quia assumenda nihil, veniam
        asperiores ipsam tempore quidem. Eveniet praesentium ad iure fugit quas
        veritatis! Atque accusantium quas ea vel ut reiciendis vitae unde animi.
        Assumenda dicta nobis deserunt molestiae cum sunt asperiores unde,
        consequuntur, omnis tempora provident. Ratione maxime mollitia corrupti
        illum totam. Nobis aperiam rerum veritatis accusantium dolore veniam
        tenetur laudantium eligendi minus tempore et, perspiciatis, voluptas aut
        in deleniti inventore quae doloribus natus quod velit. Dolore libero
        doloremque, quis sunt quisquam totam, consectetur illo, eaque unde
        doloribus sed optio qui iusto excepturi reprehenderit nobis accusantium.
        Nesciunt sint dolores provident cumque ullam non eaque nisi eligendi.
        Magnam praesentium, corrupti soluta deleniti quibusdam cupiditate esse
        veritatis amet nesciunt nisi molestias dicta laudantium consequatur quae
        enim reiciendis at commodi! Corporis tempora deserunt obcaecati mollitia
        ad atque. Nemo, natus. Cumque assumenda commodi sint nemo. A atque
        similique deserunt sed. Doloribus non voluptatum, facere sequi amet
        aperiam aut! Minus facere illo repudiandae eos expedita eum maiores
        animi libero et vel. Illum odio hic sint est voluptatum placeat
        consequatur ullam praesentium autem sapiente. Quisquam magnam optio iure
        accusamus magni vel voluptatibus voluptate! Eos laboriosam expedita
        error nobis esse sequi maiores repudiandae. Temporibus nemo cum ab eum
        ad voluptates illum sint amet expedita ratione. Optio, cupiditate saepe
        vitae a quas doloribus ratione debitis nulla repellendus eligendi dolore
        minima? Sit molestias libero incidunt. Id voluptas sunt, nulla dolor
        quos ratione doloremque veritatis aspernatur, qui iste officia neque ea!
        Dolorem ullam iste quibusdam mollitia harum culpa, quidem, sunt expedita
        dolores voluptatum nihil animi aspernatur. Tempora cumque vero dolores
        enim explicabo facere accusantium atque distinctio molestiae mollitia
        optio nisi vel ratione tenetur consequuntur harum voluptas minus, iusto
        ab esse inventore. Vel quos error aliquid nihil! Ex porro placeat quas,
        accusamus est quaerat voluptates doloribus odio harum nisi impedit culpa
        perspiciatis, earum, veritatis quisquam fuga suscipit mollitia numquam
        enim! Sit, atque! Voluptatem sint soluta voluptas quis. Provident eum
        obcaecati, molestias corrupti illum deserunt numquam aliquam amet quo
        possimus fugiat totam debitis. Ipsum voluptatem dolor cumque laboriosam
        nihil voluptatum unde, placeat veniam. Atque quam dolorum quaerat at!
        Nam architecto dolor eos atque ut sapiente ea illo porro, error omnis,
        voluptate, voluptates non rerum quis asperiores alias tenetur iure
        adipisci distinctio doloribus quae eveniet? Earum veritatis fugiat a!
        Consequuntur, maiores labore. Eveniet perferendis non neque quas eum
        minus cumque perspiciatis. Cum placeat architecto tenetur, nihil totam
        maiores, quasi veritatis molestias pariatur assumenda quas veniam
        accusantium dignissimos velit accusamus! Quod possimus eius fuga quae
        cumque a, eum quam laboriosam tenetur magni at illum ipsum nemo. Sequi
        fugit ducimus nisi dignissimos numquam quo inventore alias praesentium
        voluptate fuga, quas eligendi. Excepturi, consequatur exercitationem
        mollitia dolorum odio facere, nulla, repudiandae ipsum iste et provident
        inventore similique vel! Pariatur aut natus dolore velit, ab, assumenda
        expedita aliquam, eum vero corrupti ipsa ex! Fuga, non deserunt cum
        tempore facere minima perspiciatis ratione, dolor rem nostrum
        consequuntur iusto, voluptatibus nisi. Suscipit aperiam, accusantium
        voluptatibus ipsa est illum aut eligendi, vel delectus quas quis facere.
        Cumque molestias natus qui sunt, repellendus similique consequatur
        exercitationem aliquid omnis ut ex incidunt temporibus, soluta tenetur
        accusamus at iure nam explicabo. Quod, autem necessitatibus iste
        voluptatibus natus voluptate nesciunt. Fugit fugiat quo quidem velit
        unde molestias. Ducimus sapiente, natus aliquam reprehenderit accusamus
        sed molestiae, earum sunt quas unde debitis quia quis obcaecati quaerat
        voluptate molestias. Asperiores quam minima similique. Officia autem
        incidunt itaque quia. Odio, fugit iusto totam repellat recusandae
        pariatur ut beatae, vel omnis perferendis natus ullam expedita
        laudantium illo tenetur quo velit animi suscipit sed repudiandae
        voluptatem. Iusto neque facere optio magnam enim dignissimos eaque
        sapiente incidunt aliquam? Eius iure dolorem laudantium exercitationem
        ab nisi tenetur nostrum fuga, obcaecati, placeat culpa? Voluptate
        veritatis id unde voluptatum at? Veritatis enim cupiditate consequuntur.
        Iure a error minus consequuntur, itaque maiores nulla vitae deserunt
        beatae dolorum, quisquam quis molestiae, consectetur pariatur.
        Doloremque iste mollitia tempora distinctio omnis error quas
        voluptatibus! Tempora qui inventore, commodi at, ab veniam cumque
        eveniet nulla perferendis, ipsum esse quas? Animi vel explicabo officia
        ullam cumque perferendis perspiciatis vitae, expedita saepe optio
        dolorum voluptas incidunt omnis. Sed ex enim quas facere, eius excepturi
        quae laborum porro? Quo, iste odio. Placeat tempora assumenda incidunt
        iure cumque eius, laudantium libero doloribus, explicabo sed quidem,
        molestiae nemo quo laboriosam. Sunt nostrum magni commodi atque ipsa
        cupiditate consectetur voluptate neque non aperiam laudantium accusamus,
        ipsam fuga molestiae earum obcaecati corporis vero at nulla sapiente
        corrupti repudiandae hic cumque accusantium? Numquam? Quia et optio,
        explicabo laboriosam ipsam libero expedita fugiat mollitia obcaecati
        corporis. Aliquam cupiditate dolores impedit odit, beatae, nihil tempora
        doloremque quo accusantium soluta eos fuga eaque iste delectus rem.
        Quisquam in perferendis quas corrupti recusandae pariatur natus ullam,
        sed numquam laudantium vitae delectus nisi, veritatis obcaecati itaque
        non omnis totam. Consequuntur delectus, architecto et dicta consequatur
        debitis deserunt voluptas! Veniam laudantium, dignissimos facilis iste
        quasi ipsum consequatur voluptas impedit odit vero ut delectus suscipit
        repellat ullam laborum, vitae voluptatibus. Assumenda vitae tempore esse
        obcaecati nulla vel ipsam labore molestias? Temporibus, tempore. Ab
        dolore placeat iure quibusdam facilis harum itaque quidem autem,
        possimus quisquam rerum, recusandae quo voluptatibus id dicta expedita
        quae, officia voluptates reiciendis omnis? At maxime est perspiciatis.
        Ullam excepturi, non possimus quibusdam, cumque reiciendis ad alias
        quisquam distinctio optio, veritatis accusantium dolore reprehenderit
        minus quo tenetur quidem consectetur eaque. Pariatur, recusandae?
        Maiores repellat molestiae a voluptate asperiores. Delectus iste earum
        quisquam officia hic rem placeat voluptatibus voluptates, itaque
        expedita molestias alias quia est. Quaerat perferendis molestiae soluta
        adipisci, sequi suscipit veniam optio sint, dicta, fugiat culpa quos!
        Inventore accusamus alias dolor, deserunt quisquam explicabo tempora
        dignissimos ex sequi ratione ipsam ipsum laboriosam quos nostrum sunt,
        illum facere, aspernatur blanditiis architecto praesentium provident rem
        hic. Et, a voluptas. Sit eius maiores aperiam impedit ipsa possimus
        aliquam corrupti, nisi explicabo atque autem officiis consequatur ab, a
        in! Voluptate consectetur minima unde nulla nisi natus esse cum. Id,
        natus odio. Laborum, tenetur! Veritatis, eaque doloremque molestiae hic
        laborum velit voluptatibus? Consectetur, animi, delectus ipsa, corporis
        necessitatibus asperiores nulla non facilis quo nisi dicta? Ab, rerum
        temporibus autem perspiciatis debitis tempora! Iure voluptatum provident
        culpa quibusdam neque perspiciatis, explicabo fugiat quidem temporibus
        autem atque vero, incidunt ratione excepturi, aperiam consequuntur
        pariatur soluta perferendis repudiandae suscipit officiis maiores.
        Culpa, sunt! Perspiciatis, iusto! Placeat laboriosam voluptate explicabo
        sequi quos voluptas quia ex deserunt itaque veritatis provident labore
        et, accusantium impedit corrupti inventore optio reiciendis accusamus
        ipsum ipsam dolorem doloremque. Quis vero perspiciatis soluta! Odit
        maiores, temporibus, rerum iste reiciendis id aut ad molestiae provident
        possimus in beatae, quae libero quas! Dolor commodi eos praesentium sunt
        quam itaque laboriosam. Ab ratione id officiis itaque. Dicta
        voluptatibus, ad suscipit quasi molestiae laborum recusandae provident,
        necessitatibus ut corporis quo quisquam earum nam quos praesentium enim
        qui, veniam magnam illum. Atque ratione voluptatem officia fugiat
        eveniet accusantium! Velit consequuntur voluptate quisquam amet hic nam
        ipsam id officiis inventore iure voluptas laudantium, suscipit aperiam
        expedita possimus adipisci numquam architecto obcaecati explicabo libero
        debitis aut ipsum quidem? In, ipsum. Ullam natus vero neque dolores
        nesciunt, quaerat provident quasi excepturi nulla quia odio quas maxime
        architecto sunt consectetur laborum veniam adipisci, ad culpa. Ab, vel
        odio reiciendis saepe corporis ea. Nam illo mollitia voluptatum, sequi
        id ipsum beatae temporibus aut nostrum ab ducimus dolorum asperiores!
        Temporibus voluptate doloremque facere nisi unde corrupti! Cum, ex
        architecto sint vero doloribus exercitationem facilis? Accusamus,
        excepturi quidem modi nulla laudantium dolorem fuga culpa reprehenderit?
        Quam fuga, expedita a commodi officiis in sit eaque hic cum veniam
        corrupti provident, maiores eos enim earum odit natus? Deserunt,
        aliquam. Facilis nemo illum veritatis cupiditate iste eum dolore quo
        eligendi vel? Voluptate rerum quibusdam quas dicta expedita, nostrum
        placeat ab libero itaque, totam quidem aliquam iusto, eaque excepturi.
        Quaerat eaque ex quia enim tempora sunt. Ducimus sapiente vitae optio
        aliquid ipsum! Libero cupiditate adipisci sed repellendus dignissimos.
        Laudantium magni amet possimus voluptate eveniet quos sequi aspernatur
        nisi! In. Voluptatem, necessitatibus possimus? Sit atque beatae quia
        consequatur perferendis cupiditate sunt aliquam quaerat suscipit! Nobis
        ad in optio, ex voluptatibus voluptates quia nihil corrupti sed,
        perferendis reiciendis pariatur corporis fugit? Ratione dignissimos
        perferendis aliquam, corrupti impedit omnis ab voluptatum, quibusdam
        eligendi temporibus nobis dolores libero odit odio fugiat repellat nulla
        sed dolore officia debitis! Laboriosam eligendi architecto id eaque ad.
        Ad velit nobis repellendus at exercitationem veritatis natus dolorum
        accusantium iste. Pariatur rem optio deleniti tempora saepe rerum quasi
        animi at dolor eius exercitationem cum fugit quo odit, dolore voluptate.
        Placeat, vero porro, cupiditate harum voluptate adipisci enim
        praesentium reiciendis, quas pariatur hic illo. Sint ipsum aut vel quia
        nisi amet animi delectus ea minus quas commodi illo, omnis itaque!
        Deserunt minus hic, fugiat aut sint veniam dolorem culpa beatae commodi
        maxime unde aliquid mollitia quas ducimus omnis quidem eveniet
        accusantium, quasi similique magnam voluptates vitae consequuntur.
        Corrupti, ea cum! Illo eum ullam ducimus voluptatibus illum est,
        laboriosam qui rerum magni in atque sed earum quos accusantium voluptate
        animi vel. Necessitatibus odit facere nulla eaque rerum eveniet
        accusantium consequatur at. Illum, sunt officia officiis omnis vel
        possimus rem non, accusantium assumenda obcaecati magni, porro nisi
        error delectus unde. Quia aliquid possimus harum debitis tempora
        consequuntur dignissimos libero ad vero et! Quidem ipsam accusantium eos
        quibusdam laudantium esse ipsum id non tempora laboriosam sint omnis
        eveniet mollitia ipsa rem fugit aspernatur incidunt ullam aliquid
        facilis voluptatum, sit et, dolore voluptatibus? Reiciendis. Dignissimos
        aliquam consectetur libero placeat nostrum reiciendis tempora esse
        rerum, sunt, sed enim asperiores nesciunt. Perferendis quasi impedit sit
        odio sint doloribus adipisci officia excepturi? Nobis impedit animi ea
        fuga? Porro excepturi ullam, minima fugiat labore beatae magni veritatis
        eligendi totam quis sed nesciunt soluta provident sequi nobis ad
        consequatur, ratione odit? Maxime nulla quis ipsam. Sapiente, maiores
        quasi. Nisi? Dicta in amet dolores, libero sit cupiditate ullam adipisci
        natus incidunt nostrum mollitia, veniam eos possimus veritatis
        reiciendis beatae. Harum id ratione ipsam officiis soluta fugit illo
        odio explicabo provident. Nihil velit natus labore tempore alias impedit
        vitae nisi cum omnis, voluptates, praesentium saepe amet laudantium
        numquam voluptas facere, nobis nulla placeat. Assumenda suscipit libero
        nihil veritatis facere perspiciatis odio! Vitae deleniti tenetur
        adipisci voluptates vero doloremque repudiandae tempore, ex quam,
        debitis, officia iure. Aliquid maiores inventore necessitatibus, harum
        consequatur minus corrupti quod doloremque sit nisi eius numquam quaerat
        in! Sit, maiores ducimus. Corrupti soluta officia laboriosam laudantium
        ut rem dicta vitae laborum itaque magni ducimus, numquam non ea aperiam,
        nam accusamus iusto! Neque inventore, eius nostrum voluptate quasi
        praesentium? Sunt natus laborum dicta voluptates soluta libero corporis
        voluptatem fugiat iste numquam qui alias vero accusamus repellendus
        aperiam ab, expedita veritatis illum sed error recusandae? Optio
        exercitationem dolores ducimus quod? Possimus hic accusantium cum
        suscipit nostrum ab non omnis, totam rerum itaque nam esse magnam vitae
        maxime molestiae repellat dignissimos consectetur dolorum eos in,
        nesciunt dolore delectus. Aperiam, corrupti autem. Maxime similique
        magni, sit expedita adipisci eius cupiditate! Explicabo autem molestias
        corrupti ipsum, id iste quaerat accusamus tempore sequi libero nemo
        impedit itaque consequatur maiores velit corporis accusantium pariatur
        culpa! Deleniti placeat magnam ab, alias optio nulla consequatur
        voluptatem accusamus. Quidem aliquid optio voluptas ut odit, quis
        veniam, quae sit animi magnam doloremque dicta voluptates! Sit similique
        provident nostrum maiores! Enim amet fuga debitis consequuntur earum
        iste perferendis ducimus porro commodi. Totam error tempora minus odio
        labore reprehenderit sed quaerat ut dolores. Repellat animi ducimus
        deserunt! Aspernatur obcaecati fugiat reiciendis! Iusto quos quas sed
        minus iure tempora magni dolorem. Et, eaque voluptates. Eveniet, atque
        facilis neque ea enim deserunt quasi incidunt ut dolorem repellat? Odio
        dolore atque in numquam voluptatibus! Tempore, quas commodi deleniti
        laborum repellat nisi quam corporis! Quidem et rem sequi ea quas debitis
        in. Ipsam et tempore laboriosam illum. Eos impedit, suscipit quidem
        praesentium optio officiis nam. Consequuntur officiis quam doloribus
        dolor illo dolores tempore consectetur cumque atque animi adipisci,
        minus inventore labore dignissimos alias fugit at qui! Possimus culpa
        nam velit perspiciatis, modi ullam praesentium odio. Eum excepturi
        eveniet dolores dolorem quia tenetur esse obcaecati sequi aspernatur
        nesciunt, praesentium accusamus, nostrum magni totam non ex dolorum eius
        error ratione! Corrupti ipsam, facilis ipsum harum obcaecati
        accusantium. Aperiam possimus odit quisquam dignissimos maiores cumque
        nisi animi accusamus sed ipsum dicta, molestiae eum eveniet quis, quod
        voluptas ex, quos repudiandae qui ad. Commodi nobis totam temporibus
        exercitationem aut? Delectus aspernatur adipisci laborum quis ducimus
        optio, deleniti eius officia perferendis enim. Alias ullam placeat vero
        aliquam in, at maiores distinctio ipsam! Iste quisquam labore, placeat
        nostrum quae asperiores! Suscipit.
      </div>
    </>
  );
}
