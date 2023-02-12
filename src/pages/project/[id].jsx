import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import styles from "./styles.module.scss";

export default function Project(){

    const router = useRouter();
    let {id} = router.query;

    const [data, setData] = useState({});

    useEffect(() =>{
        if(router.isReady)
        fetch(`/api/${id}`)
        .then(res => res.json())
        .then(res => setData(res))
      }, [router.isReady])
    
      console.log(data)

      return(
        <div className={styles.Project} key={data.id}>
            <div className={styles.containerProject}>
                <Image
                    src={data.media}
                    width={200}
                    height={200} 
                    alt="" />
                    
                <div className={styles.Description}>
                    <h1>{data.name}</h1>
                    <p>{data.overview}</p>
                    <h3 className={styles.code}>Linguaggi: {data.code}</h3>
                    <span>Responsive: {data.device}</span>
                    <div className={styles.containerLink}>
                        <Link href={`${data.repository}`} target="_blank"><BsGithub /> Repository</Link>
                        <Link href={`${data.site}`} target="_blank"><BiLinkExternal /> Sito</Link>
                    </div>
                    <h5>{data.credentials}</h5>
                </div>
            </div>
            <iframe src={data.site} frameborder="0" className={styles.interactionSites}></iframe>
        </div>
      )
}