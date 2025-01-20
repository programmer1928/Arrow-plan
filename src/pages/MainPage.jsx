import React, { useContext } from "react";
import Nav from "../components/Nav/Nav";
import PlanTable from "../components/Plan/PlanTable";
import FieldContainer from "../components/Forms/FieldContainer";
import BtnPrimary from "../components/BtnPrimary";
import Container from "../components/Container";
import { MyContext } from "../services/MyContext";
import Loader from "../components/Loader/Loader";
import RemoveAllBtn from "../components/RemoveAllBtn";
import Days from "../components/Days";

export default function MainPage() {
  const [state, dispatch, isLoading] = useContext(MyContext);

  return (
    <section className="min-h-screen bg-background font-poppins flexColCenter gap-8 py-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Days/>
          {Boolean(state.startTime || state.tasks.length) && (
            <>
              <Nav />
              <PlanTable />
            </>
          )}
          <FieldContainer isDataExist={state.startTime} />
          {state.startTime && (
            <Container className={" flex gap-5"}>
              <RemoveAllBtn/>
            </Container>
          )}
        </>
      )}
    </section>
  );
}
