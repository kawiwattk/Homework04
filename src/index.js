import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';


function App() {
  return (
    <>
    <div className='card'>
      <div className='data'>
        <Avatar />
        <Intro />
        <SkillList />
      </div>
    </div>
    </>
  );
}

function SkillList() {
  return (
    <div className="Skill-list">
      <Skill skill="blender(newbie}" emoji="😱" color="red"/>
      <Skill skill="python,css(newbie)" emoji="🥵" color="lightgreen"/>
      <Skill skill="photoshop (newbie)" emoji="💀" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro(){
  return (
  <div>
    <h1>นาย กวีวัฒน์ ทาก้อน</h1>
    <p>นักศึกษาจากสาขาเทคโนโลยีสารสนเทศและการสื่อสาร 
      คณะวิทยาศาสตร์ มหาลัยอุบลราชธานี ชื่นชอบในพลัง เสพติดพลัง
      และเวลาว่างไม่เล่นเกม ก็เล่นเกม และก็นอน    
    </p>
  </div>
  );
}

function Avatar() {
  return <img className="avatar" src="my profile picture.jpg" width="375" height="400" alt="My Avatar"/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

