
import styles from "../src/Styles.module.css";
import './App.css';

function App() {
  return (
    <div class={styles.wrapper}>

      <div class={styles.topBlock}>
      
      <div class={styles.centralBlock}></div>
      
      <div class={styles.bottomBlock}></div>
      
      <div class={styles.shadow}></div>
      
      <div class={styles.bgContent}></div>
      

      
      </div>
      <div class={styles.nav}>
        <div class={styles.left}><a href="">MNTN</a></div>
        <div class={styles.centralNav}><a href="/">Equipment</a><a href="/">About Us</a><a href="/">Blog</a></div>
        <div class={styles.rightNav}><img class={styles.cart} src="cart.png" alt=""></img><a href="/">Account</a></div>

        </div>
        <div class={styles.mainText}>
          <div class={styles.topMainText}><img src="Rectangle 2.1.png" alt=""></img><span>A HIKING GUIDE</span></div>
        <div class={styles.centralMainText}><span>Be prepared for the Mountains and beyond!</span></div>
        <div class={styles.bottomMainText}><img src="Group 7.png" alt=""></img></div>
        </div>

        <div class={styles.follow}><span class={styles.rotateText}>Follow us</span><img class={styles.insta} src="instagram.png" alt=""></img><img class={styles.twitter} src="twitter.png" alt=""></img></div>
        <div class={styles.slider}><span class={styles.hovered}>Start</span><span class={styles.hovered}>01</span><span class={styles.hovered}>02</span><span class={styles.hovered}>03</span></div>
    <div class={styles.mainContent}>
    <img class={styles.equipment01} src="Equipment.png" alt=""></img>
    <img class={styles.equipment02} src="Equipment02.png" alt=""></img>
    <img class={styles.equipment03} src="Equipment03.png" alt=""></img>
    <button>Scroll Down</button>
      
      
      <div class={styles.firstSection}>
        
        <div class={styles.textSectionFirst}>

          <img src="Content01.png" alt=""></img>
        </div>
        <div class={styles.imageSectionFirst}><img src="01.png" alt=""></img></div>
      </div>
  

      <div class={styles.secondSection}>
        
      <div class={styles.imageSectionSecond}><img src="02.png"></img></div>
        <div class={styles.textSectionSecond}>

          <img src="Content02.png" alt=""></img>
        </div>

      </div>

      <div class={styles.ThirdSection}>
        
        <div class={styles.textSectionThird}>

          <img src="Content03.png" alt=""></img>
        </div>
        <div class={styles.imageSectionThird}><img src="03.png" alt=""></img></div>
      </div>

<div class={styles.footer}>
  <div class={styles.leftFooter}><span class={styles.mntnFooter}>MNTN</span>
  <span class={styles.textFooter}>Get out there & discover your next slope, mountain & destination!</span>
  <span class={styles.copyFooter}>Copyright 2019 MNTN, Inc. Terms & Privacy</span>
  </div>
  <div class={styles.centralFooter}><img src="Links.png" alt=""></img></div>
  <div class={styles.rightFooter}><img src="Links1.png" alt=""></img></div>
</div>
    </div>
    </div>
  );
}

export default App;
