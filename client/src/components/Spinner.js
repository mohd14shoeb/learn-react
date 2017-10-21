import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div class="preloader-wrapper small active">
        <div class="spinner-layer spinner-blue">
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>

        <div class="spinner-layer spinner-red">
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>

        <div class="spinner-layer spinner-yellow">
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>

        <div class="spinner-layer spinner-green">
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
