import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import  styles from "./Portfolio.module.scss"

const Portfolio = () => {
 
  useEffect(() =>{
    fetch("https://e6o21.wiremockapi.cloud/projects")
    .then(res => res.json())
    .then(res => setData(res))
  }, [])

  const [data, setData] = useState([]);

  const [indexProject, setIndexProject] = useState(1)
  
  const btnProjectPrev = () =>{
    setIndexProject(indexProject - 1)
  }
  
  const btnProjectNext = () =>{
    setIndexProject(true)
    setIndexProject(indexProject + 1)
  }

  return (
    <div className={styles.containerPortfolio}>
        <h2 id="portfolio">theLab.</h2>
        {
          <div className={styles.projectsContainer}>
            <div className={styles.cardsContainer}>
                {
                  data.filter(item => item.id === indexProject).map((item) =>
                  <>
                  <div className={styles.cardProject} key={item.id}>
                    <div className={styles.imgContainerProject}>
                        <span className={styles.loader}></span>
                        <Link href={`/project/${item.id}`}>
                          <Image 
                          src={item.media} 
                          alt={item.name}
                          width={272} 
                          height={272}/>
                        </Link>
                    </div>

                    <div className={styles.containerBtn}>
                      <button className={`${indexProject === 1 ? `${styles.hidden}` : `${styles.btnProjectPrev}`}`}
                        onClick={btnProjectPrev}>
                        <RxDoubleArrowLeft />
                      </button>
                      
                      <Link href={`/project/${item.id}`}><span>{item.name}</span></Link>
                      
                      <button className={`${indexProject == data.length ? `${styles.hidden}` : `${styles.btnProjectNext}`}`}
                        onClick={btnProjectNext}>
                        <RxDoubleArrowRight />
                      </button>
                    </div>
                    <Link href={`/project/${item.id}`} className={styles.discover}>Scopri di più</Link>    
                  </div>
                  </>
                  ) 
                }
            </div>
          </div>
        }
    </div>
  )
}

export default Portfolio