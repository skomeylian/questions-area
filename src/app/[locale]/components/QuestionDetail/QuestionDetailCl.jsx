"use client";
import React from "react";
import QuestionDetailOptionCard from "./QuestionDetailOptionCard";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

const QuestionDetailCl = ({ res }) => {
  const { wallet } = useSelector((states) => states.globalStates);
  const wa = wallet;
  return (
    <section className="flex flex-col p-2">
      <div className="flex flex-col gap-4 p-3">
        <h1 className="text-2xl border-b-2 font-bold border-primary w-auto">
          {res.data.title}
        </h1>
        <p className="text-primary-foreground text-base ">{res.data.caption}</p>
        <p className="my-2">
          Author: <span className="text-primary">{res.data.author}</span>
        </p>
        {/* <p>Wallet Addres</p> */}
      </div>
      <div className="flex flex-col p-3 my-5">
        <h1 className="text-2xl font-bold">Options</h1>
        <div className="my-5 w-full flex flex-col items-center gap-7">
          {res?.data?.options?.map(
            (item) => (
              <QuestionDetailOptionCard
                // session={session}
                wallet={wallet}
                questionsId={res.data.questionId}
                key={uniqid()}
                {...item}
              />
            )
            // console.log(item)
          )}
        </div>
      </div>
    </section>
  );
};

export default QuestionDetailCl;
