import Head from 'next/head';
import { replies } from '../data';
import { useState } from 'react';
import Header from '../components/Header';
import QuestionForm from '../components/QuestionForm';
import EightBall from '../components/EightBall';
import Footer from '../components/Footer';
import ResponseTable from '../components/ResponseTable';


export default function Home() {
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    // const [tableHeaders, setTableHeaders] = useState(["No.", "Question", "Response"]);
    const tableHeaders = ["No.", "Question", "Response"];

    function questionAskedHandler(event) {
        event.preventDefault();
        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        const answeredQuestion = {
            question: event.target.question.value,
            reply: randomReply,
            id: answeredQuestions.length,
        };

        setAnsweredQuestions([...answeredQuestions, answeredQuestion]);
    }

    function getLatestReply() {
        if (answeredQuestions.length === 0) {
            return 'Ask A Question';
        }

        return answeredQuestions[answeredQuestions.length - 1].reply;
    }

    return (
        <>
            <Head>
                <title>Expert Eight Ball</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header answeredQuestions={answeredQuestions} name={"Student"} color={"green"} />

            <main className=''>
                <QuestionForm questionAskedHandler={questionAskedHandler} />

                <EightBall getLatestReply={getLatestReply} />

                <ResponseTable answeredQuestions={answeredQuestions} tableHeaders={tableHeaders} />
            </main>

            <Footer />
        </>
    );
}
