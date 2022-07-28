import { Fragment, useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import useSidebar from "../hooks/useSidebar";
import SidebarButton from "../components/SidebarButton";

import styles from "../styles/pages/Home.module.scss";

export default function Home({ data }) {
  const [active, toggleSidebar] = useSidebar(true);

  // stages for the categories/types
  const [stage, setStage] = useState(0);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index, data.length);
    const timer = setTimeout(() => {
      setIndex((current) => (current == data.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [index, data]);

  // handle category button click -------
  const handleStoryType = (type) => {
    // will be pluged into a backend

    if (type === "in-memory") {
      setStage(0);
      // call api for in-memory type ---
    } else if (type === "missing") {
      setStage(1);
      // call api for missing type ---
    } else if (type === "heroes") {
      setStage(2);
      // call api for heroes type ---
    } else if (type === "our-lives-now") {
      setStage(3);
      // call api for our-lives-now type ---
    } else if (type === "animals") {
      setStage(4);
      // call api for animals type ---
    }
  };

  // handle active classes
  const buttonClasses = {
    inMemory: stage === 0 ? styles.active : "",
    missing: stage === 1 ? styles.active : "",
    heroes: stage === 2 ? styles.active : "",
    ourLivesNow: stage === 3 ? styles.active : "",
    animals: stage === 4 ? styles.active : "",
  };

  return (
    <Fragment>
      <section className={styles.hero}>
        <h1>Some Heading</h1>

        <div className={styles.categories}>
          <button
            className={buttonClasses.inMemory}
            onClick={() => handleStoryType("in-memory")}
          >
            In Memory
          </button>
          <button
            className={buttonClasses.missing}
            onClick={() => handleStoryType("missing")}
          >
            Missing
          </button>
          <button
            className={buttonClasses.heroes}
            onClick={() => handleStoryType("heroes")}
          >
            Heroes
          </button>
          <button
            className={buttonClasses.ourLivesNow}
            onClick={() => handleStoryType("our-lives-now")}
          >
            Our lives now
          </button>
          <button
            className={buttonClasses.animals}
            onClick={() => handleStoryType("animals")}
          >
            Animals
          </button>
        </div>
      </section>

      <main className={styles.main}>
        {/* IN-MEMORY section ------- */}
        <div className={styles.mainWrapper}>
          <div className={styles.card}>
            <img src={data[index].image} alt={data[index].alt} />

            <div className={styles.textContainer}>
              <h3>{data[index].name}</h3>
              <p className={styles.dob}>Date of Birth: {data[index].dob}</p>
              <p className={styles.story}>{data[index].story}</p>
            </div>
          </div>
        </div>
      </main>

      {/* <section className={styles.hero}>
        <div className={`${styles.left} ${active ? styles.show : ''}`}>
          <button onClick={() => handleStoryType('in-memory')}>In Memory</button>
          <button onClick={() => handleStoryType('missing')}>Missing</button>
          <button onClick={() => handleStoryType('heroes')}>Heroes</button>
          <button onClick={() => handleStoryType('our-lives-now')}>Our lives now</button>
          <button onClick={() => handleStoryType('animals')}>Animals</button>
          {active && 
          <button onClick={toggleSidebar} className={styles.hideButton}>X</button>
          }
        </div>
        {!active &&        
        <SidebarButton toggleSidebar={toggleSidebar} />  
        }
        <div className={styles.right}>
          <Carousel image={data[index].image} alt={data[index].alt} />
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.name}>
          <span>
            {data[index].name}
          </span>
        </div>
        <p className={styles.dob}>
          {data[index].dob}
        </p>
        <div className={styles.story}>
           This regex match splits the story component into parts of equal length
          {data[index].story.match(/[\s\S]{1,280}/g).map(part => (
            <p key={part.substring(0, 16)}>
              {part}
            </p>
          ))}
        </div>
      </section> */}
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: [
        {
          name: "John Brown",
          dob: "06-16-1987",
          story:
            "This is the first element, consectetur adipiscing elit. Quisque cursus odio nibh, et vehicula neque sollicitudin vel. Aliquam erat volutpat. Sed efficitur libero vitae ante fermentum ultricies. Donec fringilla diam ac magna viverra placerat. Duis vel magna dui. Suspendisse a sodales ligula. Vestibulum justo risus, feugiat et nulla nec, varius vestibulum nisl. Sed efficitur libero vitae ante fermentum ultricies. Donec fringilla diam ac magna viverra placerat.",
          image: "/family.jpg",
          alt: "family of four walking in the street",
        },
        {
          name: "Louise Smith",
          dob: "11-22-1990",
          story:
            "This is the second element, consectetur adipiscing elit. Quisque cursus odio nibh, et vehicula neque sollicitudin vel. Aliquam erat volutpat. Sed efficitur libero vitae ante fermentum ultricies. Duis vel magna dui. Suspendisse a sodales ligula. Vestibulum justo risus, feugiat et nulla nec, varius vestibulum nisl. Sed efficitur libero vitae ante fermentum ultricies. Donec fringilla diam ac magna viverra placerat. Donec fringilla diam ac magna viverra placerat.",
          image: "/woman.jpg",
          alt: "woman wearing a yellow shirt with long sleeves",
        },
        {
          name: "Sabo",
          dob: "02-27-2016",
          story:
            "Here is the thrid element, consectetur adipiscing elit. Quisque cursus odio nibh, et vehicula neque sollicitudin vel. Sed efficitur libero vitae ante fermentum ultricies. Donec fringilla diam ac magna viverra placerat. Aliquam erat volutpat. Duis vel magna dui. Suspendisse a sodales ligula. Vestibulum justo risus, feugiat et nulla nec, varius vestibulum nisl. Sed efficitur libero vitae ante fermentum ultricies. Donec fringilla diam ac magna viverra placerat.",
          image: "/dog.jpg",
          alt: "dog with golden fur",
        },
      ],
    },
  };
}
