import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Tone from 'tone';
var synth = new Tone.Synth().toMaster();
var currentTime;
//what works:
// //first set of tones (play until a little after 1m):
// Tone.Transport.scheduleRepeat( function(time){
//         console.log("in first set of tones. time argument in callBack is "+time);
//         console.log("time argument in barsBeatsSixteenths is"+Tone.Time(time).toBarsBeatsSixteenths());
//         synth.triggerAttackRelease('c3','8n');
//     },"4n",0.1,"1m");

//     //second set of tones that should be played after the first set of tones(after 1m):
//     Tone.Transport.scheduleRepeat( function(time){
//         console.log("in second set of tones. time argument in callBack is " +time);
//         console.log("time argument in barsBeatsSixteenths is"+Tone.Time(time).toBarsBeatsSixteenths());
//         synth.triggerAttackRelease('e3','4n');
//     },"2n","1m","1m");

//first set of tones (play until a little after 1m):
Tone.Transport.scheduleRepeat( function(time){
    console.log("in first set of tones. time argument in callBack is "+time);
    console.log("time argument in barsBeatsSixteenths is"+Tone.Time(time).toBarsBeatsSixteenths());
    synth.triggerAttackRelease('c3','8n');
    currentTime = Tone.Time(Tone.Transport.position);
},"4n",0.1,"1m");

//second set of tones that should be played after the first set of tones(after 1m):
Tone.Transport.scheduleRepeat( function(time){
    console.log("in second set of tones. time argument in callBack is " +time);
    console.log("time argument in barsBeatsSixteenths is"+Tone.Time(time).toBarsBeatsSixteenths());
    synth.triggerAttackRelease('e3','4n');
    
},"2n",currentTime,"1m");

    //start the transport
    Tone.Transport.start();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
