'use strict'

import Component from '../../copmonent.js';

export default class PhoneViewer extends Component {

    constructor ({ element }) {
        super({ element });

        this.on('click', '[data-element="button-back"]', () => {
            this._trigger('back');
        });

        this.on('click', '[data-element="button-add"]', () => {
            this._trigger('add', this._phone.id);
        });
    }


    showPhone(phone) {
        this._phone = phone;
        this._render(phone);

        this.show();
    }

    _render(phone) {
        this._element.innerHTML = `

      <h2>Phone details</h2>
      <div>
          <img class="phone" src="${ phone.images[0] }">
          <button class="btn btn-warning" data-element="button-back">Back</button>
          <button class="btn btn-warning" data-element="button-add">Add to basket</button>
      
      
          <h1>${ phone.name }</h1>
          <p>${ phone.description }</p>  
      
          <ul class="phone-thumbs">
            ${ phone.images.map(image => `
              <li>
                <img src="${ image }">
              </li>
              
            `).join('')}
          </ul>
      </div>
      
      <div>
        <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          ${ phone.availability.map(avaliable => `
            <dd>${avaliable}</dd>
          `).join('')}
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>${phone.battery.type}</dd>
          <dt>Talk Time</dt>
          <dd>${phone.battery.talkTime}</dd>
          <dt>Standby time (max)</dt>
          <dd>${phone.battery.standbyTime}</dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>${phone.storage.ram}</dd>
          <dt>Internal Storage</dt>
          <dd>${phone.storage.flash}</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd></dd>
          <dt>WiFi</dt>
          <dd>${phone.connectivity.wifi}</dd>
          <dt>Bluetooth</dt>
          <dd>${phone.connectivity.bluetooth}</dd>
          <dt>Infrared</dt>
          <dd>${phone.connectivity.infrared ? '✓' : '✘'}</dd>
          <dt>GPS</dt>
          <dd>${phone.connectivity.gps ? '✓' : '✘'}</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>${phone.android.os}</dd>
          <dt>UI</dt>
          <dd>${phone.android.ui}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          ${ phone.sizeAndWeight.dimensions.map(size => {
                `<dd>${size}</dd>`
            }).join('')}
          <dt>Weight</dt>
          <dd>${ phone.sizeAndWeight.weight}</dd>
        </dl>
      </li>
    </ul>
      </div>
    `;
    }
}
