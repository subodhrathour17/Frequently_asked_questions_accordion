import React,{useState} from 'react'
import './style.css'


function Faq() {
  const [isActive, setIsActive] = useState(false);

  const track=(index)=>{
    if(isActive===index){
      return setIsActive(null)
    }
    setIsActive(index)
  }
  
  return (
    <div>
      <h1>Frequently asked questions</h1>
      <div className="accordion">
        {Data.map((item,index ) => {
          return(
            <div onClick={()=>track(index)}>
          <div className='title' >{item.title} 
          <span > {isActive===index?'➖': '➕'}</span>
          </div>
          <div className={isActive===index?'content show':'content'}>{item.content}</div>
          
          </div>
        )
      })
    }
      </div>
    </div>
  );
}

const Data = [
  {
    title: 'Why coaching classes are importent?',
    content: `It provides correct guidance to the children that empowers them to utilize their extra time in covering various subjects. Hence, coaching also benefits the students as it helps them to learn the technique of studying. It also makes a student maintain a daily routine.`
  },
  {
    title: 'How we are different from other coaching?',
    content: `While both coaching and training are meant to "create solutions", coaching is doing it while "asking questions"; and training rather by "giving advice"; While coaching and mentoring can be very close to each other, mentoring is more often about "giving advice" than coaching.`
  },
  {
    title: 'What is our Test series plan? How its gonna help boosting your performence?',
    content: `Since Board examinations will hit next year during March followed by JEE, you need to start optimizing your process of study and revision along with testing your thoroughness on the previously prepared subject matter as early as you can. While preparing for JEE, students are required to prepare for both standard 11th and 12th subject contents. It so happens that students tend to forget the concepts that they had learnt early on in standard 11th as they reach the end of standard 12. This is a result of lack of regular revision and absence of constantly putting yourself to test`
  },
  {
    title: 'How is our vacation batch planned?Search on your phone or table?',
    content: `Now that summer is in full swing, a lot of people have been asking me the same question: How can you take your phone with you on vacation without letting your phone ruin your vacation?`
  },
  {
    title: 'How to reach out to us for any query?',
    content: `If you require any further information, feel free to contact me. If you require any further information, let me know. Please feel free to contact me if you need any further information.`
  }
]
export default Faq
