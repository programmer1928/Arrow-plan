import React from "react";
import Container from "../Container";
import Progress from "./Progress";
import Notification from "./Notification";
import { useContext } from "react";
import { MyContext } from "../../services/MyContext";
export default function Nav() {
  const [state] = useContext(MyContext)

  return (
    <Container className={" w-full"}>
      <nav className="sectionStyle  flex flex-col  justify-evenly items-center md:flex-row ">
        <Notification/>
        <section className="flex justify-center flex-wrap">
          {
            state &&
            Object.entries(state.progress).map(([key,value])=>{
              return (Boolean(value.quantity) || value.quantity === 0) && <Progress key={key} title={value.title} color={value.color} progressNumber={value.quantity}/>
            })
          }
        </section>

      </nav>
    </Container>
  );
}
