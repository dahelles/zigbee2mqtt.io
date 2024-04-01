"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[5095],{501663:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-f00c26ac","path":"/devices/WXKG17LM.html","title":"Aqara WXKG17LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara WXKG17LM control via MQTT","description":"Integrate your Aqara WXKG17LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Click mode (enum)","slug":"click-mode-enum","link":"#click-mode-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1711994004000},"filePathRelative":"devices/WXKG17LM.md"}')},965352:(e,t,o)=>{o.r(t),o.d(t,{default:()=>N});var a=o(166252);const i=(0,a._)("h1",{id:"aqara-wxkg17lm",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#aqara-wxkg17lm","aria-hidden":"true"},"#"),(0,a.Uk)(" Aqara WXKG17LM")],-1),l=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"WXKG17LM")],-1),n=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Wireless remote switch E1 (double rocker)")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, voltage, click_mode, action, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WXKG17LM.png",alt:"Aqara WXKG17LM"})])],-1),s=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,a.Uk)(" Adapter firmware")],-1),m=(0,a._)("p",null,"In order for this device to work (fully), at least the following firmware is required on your adapter:",-1),p={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},k=(0,a._)("code",null,"20211115",-1),g={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},_=(0,a._)("code",null,"20211114",-1),b={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},f=(0,a._)("code",null,"20211222",-1),v={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},w=(0,a._)("code",null,"0x26720700",-1),y=(0,a._)("p",null,[(0,a._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),q=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="click-mode-enum" tabindex="-1"><a class="header-anchor" href="#click-mode-enum" aria-hidden="true">#</a> Click mode (enum)</h3><p>Click mode, fast: only supports single click which will be send immediately after clicking, multi: supports more events like double and hold. Value can be found in the published state on the <code>click_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;click_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;click_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>fast</code>, <code>multi</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single_left</code>, <code>single_right</code>, <code>single_both</code>, <code>double_left</code>, <code>double_right</code>, <code>hold_left</code>, <code>hold_right</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),x={},N=(0,o(983744).Z)(x,[["render",function(e,t){const o=(0,a.up)("RouterLink"),x=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[l,(0,a._)("tbody",null,[r,(0,a._)("tr",null,[n,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,a.w5)((()=>[(0,a.Uk)("Aqara")])),_:1})])]),d,c,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),s,h,m,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("CC2530/CC2531: "),(0,a._)("a",p,[k,(0,a.Wm)(x)])]),(0,a._)("li",null,[(0,a.Uk)("CC1352/CC2652: "),(0,a._)("a",g,[_,(0,a.Wm)(x)])]),(0,a._)("li",null,[(0,a.Uk)("CC2538: "),(0,a._)("a",b,[f,(0,a.Wm)(x)])]),(0,a._)("li",null,[(0,a.Uk)("Conbee II: "),(0,a._)("a",v,[w,(0,a.Wm)(x)])])]),y,(0,a.kq)(" Notes END: Do not edit below this line "),q])}]])}}]);