// Quake View handler
import { processDate } from './utilities.js';
export default class QuakesView {
    
    renderQuakeList(quakeList, start, end, radius, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      let str = `
        <!--This is the Toolbar where the list Count and all of the serach inputs are located -->
        <li class="tool-bar">
          <span class="cell">Quake Count:</span><span class="cell"> ${quakeList.metadata.count}</span>
          <span class="input"><label>Start Date: </label><input id="start-date" class="form-control search-dte" value="${processDate('client', new Date(start))}"/></span>
          <span class="input"><label>End Date: </label><input id="end-date" class="form-control search-dte" value="${processDate('client', new Date(end))}"/></span>
          <span class="input"><label>Search Radius: </label><input id="radius" class="form-control radius" value="${radius}"/></span>
          <button id="search" class="btn btn-search">Search</button>
        </li>
        <!-- This is the Headers row -->
        <li class="headers">
          <span class="date-time-cont">
            <span class="day">Day</span>
            <span class="date">Date</span>
            <span class="time">Time</span>
          </span>
          <span class="cell mag">Magnitude</span>
          <span class="cell cause">Cause</span>
          <span class="cell distance">Distance</span>
          <span class="cell city">City</span>
          <span class="cell state">State/Country</span>
          <span class="cell coords">Coordinates</span>
          <span class="cell quake-id">Interactive Map</span>
        </li>
        <!-- Here is where the individual quake data points will be populated -->
        <li class="list-cont">
          <div class="list-scroll">
            <ul class="inner-list">
      `;
      str += quakeList.features
      .map(quake => {
        return `
        <li class="quake-row" data-id="${quake.id}">
          <span class="cell">
            ${this.formatDate(new Date(quake.properties.time))} 
            ${this.processTitle(quake.properties.title)}
            <span class="cell coords">${quake.geometry.coordinates}</span>

            <span class="cell quake-id"><a class="map" target="_blank" href="https://earthquake.usgs.gov/earthquakes/eventpage/${quake.id}/map"><img class="map" src="/modules/quakes/images/map.png"></a></span>
          </span>

          <div title="Double Click to Close Quake Details" class="quake-info hide">

          </div>
        </li>`;
      })
      .join('');

      str += '</ul></div></li>';
      listElement.innerHTML = str;
    }
    processTitle(title){

      // Initialize all of the variables for the title data. Set the values to default to an empty or missing indicator
      let title_list = title.split(' - ');
      let spaces = title_list[0].split(' ');
      let mag = '<i class="missing"> - </i>';
      let cause = '<i class="missing"> - </i>';
      let distance = '<i class="missing"> - </i>';
      let location = '<i class="missing"> - </i>';
      let city = '<i class="missing"> - </i>';
      let state = '<i class="missing"> - </i>';

      // Parse out all of the possible data points and give them their own home
      if(title_list[1].indexOf(' of ') > -1){
        title_list[1] = title_list[1].split('of');
        distance = title_list[1][0];
        location = title_list[1][1];
      }
      else{
        location = title_list[1];
      }
      
      if(location.indexOf(',') > -1){
        location = location.split(',');
        city = location[0];
        state = location[1];
      }
      else{
        state = location;
      }
      
      mag = spaces.shift();
      mag += ' ' + spaces.shift();
      if(spaces.length > 1){
        cause = spaces.join(' ');
      }

      let str = `
        <span class="cell mag">${mag}</span>
        <span class="cell cause">${cause}</span>
        <span class="cell distance">${distance}</span>
        <span class="cell city">${city}</span>
        <span class="cell state">${state}</span>
        <!--<span class="title">${title}</span>-->
      `
      return str;
    }
    formatDate(dte){
      let d = dte.getDate();
      let m = dte.getMonth() + 1;
      let y = dte.getFullYear().toString();
      let h = dte.getHours();
      let min = dte.getMinutes();
      let s = dte.getSeconds();
      let date_parts = dte.toISOString().split('T');
      let date_str = date_parts[0];
      let date_time = date_parts[1];

      let local = new Date(dte);
      local.setMinutes(dte.getMinutes() - dte.getTimezoneOffset());

      const s_iso = local.toISOString();
      const date = s_iso.substring(0,10);
      const time = s_iso.substring(11,16);
      const local_time = dte.toLocaleTimeString();
      const time_str = dte.toTimeString();
      const dow = local.toDateString().substring(0, 3);

      // As I worked with this part of the data I thought it would be nice to see each poin seperately plus if we decide to create filter methods 
      // for each column type we would be able to do it quickly
      let str = `
        
        <span class="date-time-cont">
          <span class="day">${dow}</span> 
          <span class="date">${m}/${d}/${y}</span>
          <span class="time">${local_time}</span>
        </span>

      `
      return str;
    }
    renderQuake(ele, quake) {
      const quakeProperties = Object.entries(quake.properties);
      let str = '';
      let txt = '';
      // Iterate over the quake properties and assign a seperate div and label to each key and value pair

      quakeProperties.forEach(([key, value]) => str += `<div class="info-cont"><label>${key}:</label> <p>${this.createHyperLink(value)}</p></div>`);
      ele.innerHTML = str + '<div class="clearfix"></div>';
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
    
    }
    createHyperLink(val){
      
      let txt = val;
      if(typeof txt === 'string'){
        //alert(val);
       if(txt.indexOf('https') > -1){
          txt = `<a href="${val}" target="_blank" class="quake-info-link">${val}</a>`
        }
      }
      
      return txt;
    }
    renderMetaData(meta, ele){

    }
  }