"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86070],{430114:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-a75d856c","path":"/devices/NAS-AB06B2.html","title":"Neo NAS-AB06B2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-AB06B2 control via MQTT","description":"Integrate your Neo NAS-AB06B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-27T19:46:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Alarm state (enum)","slug":"alarm-state-enum","link":"#alarm-state-enum","children":[]},{"level":3,"title":"Alarm switch (binary)","slug":"alarm-switch-binary","link":"#alarm-switch-binary","children":[]},{"level":3,"title":"Tamper alarm switch (binary)","slug":"tamper-alarm-switch-binary","link":"#tamper-alarm-switch-binary","children":[]},{"level":3,"title":"Tamper alarm (binary)","slug":"tamper-alarm-binary","link":"#tamper-alarm-binary","children":[]},{"level":3,"title":"Alarm melody (enum)","slug":"alarm-melody-enum","link":"#alarm-melody-enum","children":[]},{"level":3,"title":"Alarm mode (enum)","slug":"alarm-mode-enum","link":"#alarm-mode-enum","children":[]},{"level":3,"title":"Alarm time (numeric)","slug":"alarm-time-numeric","link":"#alarm-time-numeric","children":[]},{"level":3,"title":"Charging (binary)","slug":"charging-binary","link":"#charging-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1711994004000},"filePathRelative":"devices/NAS-AB06B2.md"}')},588542:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var i=t(166252);const o=(0,i._)("h1",{id:"neo-nas-ab06b2",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#neo-nas-ab06b2","aria-hidden":"true"},"#"),(0,i.Uk)(" Neo NAS-AB06B2")],-1),l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"NAS-AB06B2")],-1),d=(0,i._)("td",null,"Vendor",-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Outdoor solar alarm")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"alarm_state, alarm_switch, tamper_alarm_switch, tamper_alarm, alarm_melody, alarm_mode, alarm_time, charging, battery, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-AB06B2.png",alt:"Neo NAS-AB06B2"})])],-1),h=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="alarm-state-enum" tabindex="-1"><a class="header-anchor" href="#alarm-state-enum" aria-hidden="true">#</a> Alarm state (enum)</h3><p>Alarm status. Value can be found in the published state on the <code>alarm_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>alarm_sound</code>, <code>alarm_light</code>, <code>alarm_sound_light</code>, <code>normal</code>.</p><h3 id="alarm-switch-binary" tabindex="-1"><a class="header-anchor" href="#alarm-switch-binary" aria-hidden="true">#</a> Alarm switch (binary)</h3><p>Enable alarm. Value can be found in the published state on the <code>alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id="tamper-alarm-switch-binary" tabindex="-1"><a class="header-anchor" href="#tamper-alarm-switch-binary" aria-hidden="true">#</a> Tamper alarm switch (binary)</h3><p>Enable tamper alarm. Value can be found in the published state on the <code>tamper_alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tamper_alarm_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> tamper alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id="tamper-alarm-binary" tabindex="-1"><a class="header-anchor" href="#tamper-alarm-binary" aria-hidden="true">#</a> Tamper alarm (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> tamper alarm is ON, if <code>OFF</code> OFF.</p><h3 id="alarm-melody-enum" tabindex="-1"><a class="header-anchor" href="#alarm-melody-enum" aria-hidden="true">#</a> Alarm melody (enum)</h3><p>Alarm sound effect. Value can be found in the published state on the <code>alarm_melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_melody&quot;: NEW_VALUE}</code>. The possible values are: <code>melody_1</code>, <code>melody_2</code>, <code>melody_3</code>.</p><h3 id="alarm-mode-enum" tabindex="-1"><a class="header-anchor" href="#alarm-mode-enum" aria-hidden="true">#</a> Alarm mode (enum)</h3><p>Alarm mode. Value can be found in the published state on the <code>alarm_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>alarm_sound</code>, <code>alarm_light</code>, <code>alarm_sound_light</code>.</p><h3 id="alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-time-numeric" aria-hidden="true">#</a> Alarm time (numeric)</h3><p>Alarm duration in minutes. Value can be found in the published state on the <code>alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="charging-binary" tabindex="-1"><a class="header-anchor" href="#charging-binary" aria-hidden="true">#</a> Charging (binary)</h3><p>Charging status. Value can be found in the published state on the <code>charging</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> charging is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),u={},m=(0,t(983744).Z)(u,[["render",function(e,a){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),o,(0,i._)("table",null,[l,(0,i._)("tbody",null,[r,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Neo"},{default:(0,i.w5)((()=>[(0,i.Uk)("Neo")])),_:1})])]),n,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);