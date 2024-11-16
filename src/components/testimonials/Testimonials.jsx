import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Student1",
      position: "Student",
      message:
        "This platform changed my career! The expert-led courses helped me get certified and achieve amazing progress in my career. Highly recommend!",
      image:
        "https://cdn.discordapp.com/attachments/1186754917868777522/1307272529462689812/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.png?ex=6739b3ea&is=6738626a&hm=d8edea73363f330c4a15ebaf45b5708f4cd81c90c200ec4611cf5adec9d20e5a&",
    },
    {
      id: 2,
      name: "Student2",
      position: "Student",
      message:
        "The flexible, engaging content made learning data analysis easy. The hands-on projects were incredibly helpful. Great experience!",
      image:
        "https://cdn.discordapp.com/attachments/1186754917868777522/1307272529462689812/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.png?ex=6739b3ea&is=6738626a&hm=d8edea73363f330c4a15ebaf45b5708f4cd81c90c200ec4611cf5adec9d20e5a&",
    },
    {
      id: 3,
      name: "Student3",
      position: "Student",
      message:
        "Perfect for a busy individual like me! Short lessons and an intuitive layout made upskilling in marketing a breeze!",
      image:
        "https://cdn.discordapp.com/attachments/1186754917868777522/1307272529462689812/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.png?ex=6739b3ea&is=6738626a&hm=d8edea73363f330c4a15ebaf45b5708f4cd81c90c200ec4611cf5adec9d20e5a&",
    },
    {
      id: 4,
      name: "Student4",
      position: "Student",
      message:
        "Top-notch courses! The software development track was fun and effective, helping me land a full-time engineering job.",
      image:
        "https://cdn.discordapp.com/attachments/1186754917868777522/1307272529462689812/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.png?ex=6739b3ea&is=6738626a&hm=d8edea73363f330c4a15ebaf45b5708f4cd81c90c200ec4611cf5adec9d20e5a&",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
