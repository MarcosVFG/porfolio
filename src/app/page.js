import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.main}>
        <div className={styles.quadranteUm}>
          <div className={styles.numbers}>
            <span className={styles.fade}>1</span>
            <span className={styles.fadeTwo}>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span className={styles.fadeTwo}>20</span>
            <span className={styles.fade}>21</span>
          </div>
          <div>
            <span className={styles.barOne}></span>
          </div>
          <div>
            <span className={styles.barTwo}></span>
          </div>
          <div>
            <span className={styles.barThree}></span>
          </div>
          <div className={styles.textColor}>
            <p className={styles.hello}> &lt;hello&gt;</p>
            <p>Hello, my name is <span className={styles.marcos}>Marcos</span>()&#123; </p>
            <p>I am a <span className={styles.full}>Full-Stack developer</span></p>
            <p>crafting <span className={styles.innovative}>innovative solutions</span></p>
            <p>that seamlessly blend </p>
            <p><span className={styles.crea}>creativity</span> and  <span className={styles.crea}>functionality </span></p>
            <p>&#125;</p>
          </div>
        </div>
        <div className={styles.quadranteDois}> 
          <h1 className={styles.marcosRight}>&lt;MARCOS</h1>
          <h1 className={styles.marcosRightTwo}>VINICIUS&gt;</h1>
          <p className={styles.help}>//I HELP YOU</p>
          <div className={styles.create}>
            <span></span>
          </div>
        </div>
      </div>
  );
}
