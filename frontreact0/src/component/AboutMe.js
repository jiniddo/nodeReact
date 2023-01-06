import aboutDB from '../json/aboutdb.json';

const AboutMe = (props) =>{
 
  return(
    <section className="skill row justify-content-between text-center" id={aboutDB.contentid}>
           <div class="technicalSkill col-5">
            <h3>TECHNICAL SKILLS</h3>
              <li><a href="/tech.png"></a></li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>Illustration/Photoshop</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>Gnuboard</li>
              <li>Git</li>
              <li>Figma</li>
            </div>
          <div class="softSkill col-5">
            <h3>SOFT SKILLS</h3>
            <li><a href="/soft.png"></a></li>
              <li>Creativity</li>
              <li>Communication skills</li>
              <li>Teamwork</li>
              <li>Problem-solving</li>
          </div>
        
      
    
    </section>
  )
}

export default  AboutMe;

