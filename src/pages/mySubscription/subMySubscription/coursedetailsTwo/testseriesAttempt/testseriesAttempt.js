import axios from 'axios'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TEST_endPointUrl } from '../../../../../common/api/endPointUrl'
import Button from 'react-bootstrap/Button';
import Modale from './module';
import { Tokens } from '../../../../../App';
import { ProtectUrl } from '../../../../../utils';

const TestSeriesAttempt = () => {
    const navigate = useNavigate()
    const {slug} = useParams()
    const token = useContext(Tokens)
    const { id, nameindex } = useParams()
    const [student, setStudent] = useState([])

    /* showing questions and questions paper */
    const [showQuestions,setShowQuestions] = useState(true)
    

    /* test timer state*/
    const [time, setTime] = useState()
    const Ref = useRef(null);
    const [timer, setTimer] = useState();
    /* test timer state*/

    /* test attempt state*/
    const [Right, setRight] = useState(0)
    const [Wrong, setWrong] = useState(0)
    const [Attempt, setAttempt] = useState(0)
    const [notAttempt, setNotAttempt] = useState(0)
    const [option, setOption] = useState([])
    /* test attempt state*/

    /* test modal state*/
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    /* test modal state*/

    /* test timer function*/
    const getTimeRemaining = (time) => {
        const total = Date.parse(time) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        setTimer();
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);

        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setHours(deadline.getHours() + time / 60);
        deadline.setMinutes(deadline.getMinutes() + time * 48 / 120);
        deadline.setSeconds(deadline.getSeconds() + time * 20 / 60 / 60);
        return deadline;
    }
    /* test timer function*/

    useEffect(() => {
        const testData = () => {
            if(ProtectUrl(slug)){
            var config = {
                method: 'get',
                url: TEST_endPointUrl + 'api/student/test_series/' + id + "/",
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            axios(config)
                .then(function (response) {
                    setStudent(response.data)
                    setTime(response.data[0].time_duration)
                    // console.log(response.data, "tttt")

                })
                .catch(function (error) {
                    // console.log(error);
                })
            }else{
                navigate(`/courses/${slug}`)
            }
        }
        testData()
        clearTimer(getDeadTime());

    }, [time, id, token ,slug,navigate])

    /* test testAteempt function*/
    const handalOption = (opt, Obj) => {
        let Id = Obj.id
        var check;
        var res = option.filter(item => item.id === Id)
        if (res.length) {
            var index = option.findIndex(item => item.id === Id)
            option.splice(index, 1)
            let cot = student?.[0]?.CategoryTestSeriesQuestions?.filter(item => item.answer.trim() === opt && item.opt_1 === Obj.opt_1 && item.opt_2 === Obj.opt_2 && item.opt_3 === Obj.opt_3 && item.opt_4 === Obj.opt_4)

            if (cot.length) {
                check = true
            } else {
                check = false
            }
            setOption([...option, { answer: opt, id: Id, check }])
        } else {
            let cot = student?.[0]?.CategoryTestSeriesQuestions?.filter(item => item.answer.trim() === opt && item.opt_1 === Obj.opt_1 && item.opt_2 === Obj.opt_2 && item.opt_3 === Obj.opt_3 && item.opt_4 === Obj.opt_4)
            if (cot.length) {
                check = true
            } else {
                check = false
            }
            setOption([...option, { answer: opt, id: Id, check }])
        }
    }

    const dataAdd = () => {
        setShow(true)
        var rightAnswer = option?.filter(item => item.check === true)
        rightAnswer = rightAnswer.length
        setRight(rightAnswer)
        let wrongAnswer = option.length - rightAnswer
        setWrong(wrongAnswer)
        let notatt = student?.[0]?.CategoryTestSeriesQuestions?.length - option?.length
        setNotAttempt(notatt)
        setAttempt(option?.length)
    }

    const handleSubmit = useCallback(() => {
    
        var rightAnswer = option?.filter(item => item.check === true)
        rightAnswer = rightAnswer.length
        setRight(rightAnswer)
        let wrongAnswer = option.length - rightAnswer
        setWrong(wrongAnswer)
        let notatt = student?.[0]?.CategoryTestSeriesQuestions?.length - option?.length
        setNotAttempt(notatt)
        setAttempt(option?.length)
    }, [option, student])
    /* test testAteempt function*/

    /* test modal function*/
    const dataSubmit = useCallback(() => {
        handleSubmit()
        sessionStorage.setItem("test_result", JSON.stringify({ Right, Wrong, student, notAttempt, option }))
    }, [Right, Wrong, student, notAttempt, option, handleSubmit])

    useEffect((e) => {
        dataSubmit()

    }, [timer, dataSubmit])


    /* test modal function*/

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {(student && student.length ? student : [])?.map((data, index) => {
                        return (
                            <>
                                <div className="col-xl-8 col-xxl-8" key={index}>
                                    <div className="card-header d-flex d-block">
                                        <h4 className="modal-title text-bold">Test:{nameindex} {data?.title}</h4>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="course-details-tab style-2 mt-4">
                                                <nav>
                                                    <div className="nav nav-tabs tab-auto fixed" id="nav-tab" role="tablist">
                                                        <button className={showQuestions?"nav-link active":"nav-link"} id="nav-about-tab"  onClick={()=>setShowQuestions(true)}>
                                                            <span className="mrr-2">
                                                                <i className="bi-info-square" />  {data?.CategoryTestSeriesQuestions?.length} Questions
                                                            </span>
                                                        </button>
                                                        <button className={showQuestions?"nav-link":"nav-link active"} id="nav-discussion-tab"  onClick={()=>setShowQuestions(false)}>
                                                            <span className="mrr-2">
                                                                <i className="bi-newspaper" /> Question Paper
                                                            </span>
                                                        </button>
                                                    </div>
                                                </nav>
                                                <div className="tab-content mt-4" id="nav-tabContent">
                                                    <div className={showQuestions?"tab-pane fade show active":"tab-pane fade"} id="nav-about" role="tabpanel" key={index}>
                                                        {data?.CategoryTestSeriesQuestions?.map((test, index) => {
                                                            const { question, opt_1, opt_2, opt_3, opt_4 } = test
                                                            return (
                                                                <div className="chatbox_right" key={index}>
                                                                    <div className="messages-line simplebar-content-wrapper2  scrollstyle_4">
                                                                        <div className="simplebar-content-wrapper activee">
                                                                            <div className="user-status">
                                                                                <div className="ques_item">
                                                                                    <div className="ques_title">
                                                                                        <span>Ques.<span id="new_qsn_no">({index + 1})</span>:- </span>
                                                                                        <span id="new_qsn"> {question}
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ui form">
                                                                                        <div className="grouped fields" onChange={(e) => handalOption(e.target.value, test)}   >
                                                                                            <div className="card field fltr-radio">
                                                                                                <div className="ui radio checkbox">
                                                                                                    <input type="radio" value="opt_1" name={index + 1} tabIndex={0} className="hidden mr-2" />
                                                                                                    <label id="opt_1_text">{opt_1}</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="field fltr-radio">
                                                                                                <div className="ui radio checkbox checked">
                                                                                                    <input type="radio" value="opt_2" name={index + 1} tabIndex={0} className="hidden mr-2" />
                                                                                                    <label id="opt_2_text">{opt_2}</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="card field fltr-radio mt-4">
                                                                                                <div className="ui radio checkbox">
                                                                                                    <input type="radio" value="opt_3" name={index + 1} tabIndex={0} className="hidden mr-2" />
                                                                                                    <label id="opt_3_text">{opt_3}</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="card field fltr-radio">
                                                                                                <div className="ui radio checkbox">
                                                                                                    <input type="radio" value="opt_4" name={index + 1} tabIndex={0} className="hidden mr-2" />
                                                                                                    <label id="opt_4_text">{opt_4}</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className={showQuestions?"tab-pane fade show":"tab-pane fade show active"} id="nav-discussion" role="tabpanel"  >
                                                        <div className="about-content">
                                                            <div className="card-header d-flex">
                                                                <h4 className="modal-title text-center">Question Paper</h4>
                                                            </div>
                                                            {data?.CategoryTestSeriesQuestions?.map((test, index) => {
                                                                return (
                                                                    <div className="card-header d-flex d-block" key={index}>
                                                                        <h4 className="modal-title">Ques.({index + 1}):-{test?.question}
                                                                        </h4>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-3 col-xxl-4 mt-4"> */}
                                <div className="col-xxl-4 mt-4">
                                    <div className="row">
                                        <div className="col-xl-12 col-md-6">
                                            <div className="bg-v fixedd">
                                                <div className="card-header d-block">
                                                    <h5 className="card-title">Time Left
                                                        {option.length ? timer === "00:00:00" ? document.getElementById('button').click() : "" : ""}
                                                        <span className="test-timer">{timer}</span>
                                                    </h5>
                                                </div>
                                                <h4 className="background-warning text-center">Section: Practise Test</h4>
                                                <div className="row card-body scrollspy">
                                                    {data?.CategoryTestSeriesQuestions?.map((queData, index) => {
                                                        return (
                                                            <div className="col-xl-1 col-xxl-1 media mrr-2" key={index}>
                                                                <button style={{ backgroundColor: `${(option.find(item => item?.id === queData?.id)) ? "green" : ""}`, color: `${(option.find(item => item?.id === queData?.id)) ? "white" : ""}` }} className="btn bt-white">{index + 1}</button>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="card-footer d-sm-flex justify-content-between align-items-center">
                                                    <div className="card-footer-link mb-4 mb-sm-0">
                                                        <div className="basic-dropdown">
                                                            <div className="dropdown dropstart ">
                                                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                                                    <i className="bi-exclamation-square-fill" /> Report
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <h5 className="dropdown-header">Report</h5>
                                                                    <Link className="dropdown-item">Wrong Question</Link>
                                                                    <Link className="dropdown-item">Formatting Issue</Link>
                                                                    <Link className="dropdown-item">Wrong Translations</Link>
                                                                    <Link className="dropdown-item">Others</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Button type="button" variant="btn btn-secondary" onClick={dataAdd}>
                                                        Submit Test
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </>
                        )
                    })}
                </div>
            </div>
            <Modale show={show} onHide={handleClose} handleClose={handleClose} student={student} Attempt={Attempt} notAttempt={notAttempt} dataSubmit={dataSubmit} />
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="col-lg-12">
                                <h4 className="text-center">Submit Your Test</h4>
                                <div className="table-responsive mt-4 text-center">
                                    <table className="table success-table-bordered">
                                        <thead className="thead-warning">
                                            <tr>
                                                <th scope="col">No. of questions</th>
                                                <th scope="col">Attempted</th>
                                                <th scope="col">Not Attempted</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="fs-18">
                                                <th>{student?.[0]?.CategoryTestSeriesQuestions?.length}</th>
                                                <td>{Attempt}</td>
                                                <td>{notAttempt}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger dark" data-bs-dismiss="modal">Close</button>
                            <Link to="report">
                                <button id='button' onClick={dataSubmit} className="btn btn-warning" >Submit Test</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestSeriesAttempt;