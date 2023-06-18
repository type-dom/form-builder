import { TypeSvgSvg } from '../../../type-element/type-svg/svg/svg.abstract';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';

export class NumericalSvg extends TypeSvgSvg {
  className: 'NumericalSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'NumericalSvg';
    this.addAttrObj({
      viewBox: '0 0 1560 1024',
    });
    this.resetSize(30, 20);
    const path = new SvgPath(this);
    path.setData('M0 913.297297h1494.486486v110.702703H0zM1239.565838 41.513514c31.328865 0 60.60973 4.012973 87.731892 12.066594 27.481946 8.164324 51.476757 20.48 71.873729 36.974703 20.67373 16.716108 36.864 38.137081 48.51546 64.069189 11.623784 25.876757 17.408 56.098595 17.408 90.610162 0 34.926703-10.101622 66.144865-30.166487 93.211676a191.598703 191.598703 0 0 1-46.91027 45.083676l7.693838 3.182702c27.675676 12.177297 49.650162 30.470919 65.619027 54.797838 22.140541 33.653622 33.155459 73.285189 33.155459 118.534919 0 37.279135-6.780541 70.434595-20.424648 99.355676a208.536216 208.536216 0 0 1-55.10227 72.178162c-22.998486 19.179243-49.954595 33.542919-80.729946 43.063351-30.443243 9.40973-62.685405 14.114595-96.726487 14.114595-36.753297 0-70.296216-5.258378-100.573405-15.775135-30.636973-10.627459-56.873514-26.513297-78.598919-47.602163-21.753081-21.088865-38.386162-46.993297-49.871568-77.491891-11.430054-30.387892-16.771459-64.761081-16.051892-103.064217l0.221406-13.616432h110.342919l0.387459 13.450378c1.21773 42.952649 13.228973 77.381189 35.867676 103.839135 22.029838 25.683027 54.410378 38.635243 98.276324 38.635244 18.736432 0 36.476541-2.905946 53.303351-8.745514a134.282378 134.282378 0 0 0 43.58919-24.437621 115.047784 115.047784 0 0 0 29.336216-38.441514c7.223351-15.055568 10.876541-32.159135 10.87654-51.476757 0-20.037189-3.514811-37.555892-10.516756-52.639135a115.628973 115.628973 0 0 0-27.980108-38.469189 111.837405 111.837405 0 0 0-41.513514-23.109189 179.255351 179.255351 0 0 0-54.133622-7.859892 381.924324 381.924324 0 0 0-48.238702 2.905946l-15.581406 1.992648v-104.614054l16.605406 3.376433c2.380108 0.498162 4.428108 0.719568 6.033297 0.719567h27.45427c16.245622 0 31.688649-2.297081 46.356757-6.863567 14.391351-4.511135 26.900757-11.042595 37.638919-19.594379 10.43373-8.358054 18.819459-18.902486 25.101838-31.771675 6.227027-12.675459 9.382054-27.260541 9.382054-43.865946 0-34.041081-10.129297-58.506378-30.166487-74.668973-20.922811-16.937514-47.242378-25.433946-79.48454-25.433946-20.175568 0-37.500541 3.708541-52.140973 11.042595a103.479351 103.479351 0 0 0-36.393514 29.557621c-9.686486 12.537081-16.882162 27.260541-21.642378 44.253406a203.748324 203.748324 0 0 0-7.334054 55.212973v13.837837h-111.532973l0.553513-14.363675c1.383784-35.258811 7.001946-67.528649 16.882163-96.864865 10.073946-29.668324 24.548324-55.240649 43.45081-76.661622 19.013189-21.559351 42.758919-38.413838 71.071136-50.535784 28.256865-12.09427 60.665081-18.099892 97.08627-18.099891zM304.432432 13.837838v747.243243H189.301622V245.483243H0V148.839784h13.837838c23.967135 0 47.242378-1.798919 69.82573-5.396757a184.707459 184.707459 0 0 0 58.921513-19.317622 129.85427 129.85427 0 0 0 43.257081-37.666594c10.378378-14.003892 17.961514-31.633297 22.638703-52.998919L210.058378 25.267892 212.134054 13.837838H304.432432z m372.791352 0c32.186811 0 62.547027 4.815568 91.025297 14.419027a223.342703 223.342703 0 0 1 75.167135 42.205405 198.157838 198.157838 0 0 1 51.116973 69.216865c12.537081 27.592649 18.764108 59.308973 18.764108 95.03827 0 33.487568-5.147676 63.266595-15.498378 89.337081a254.616216 254.616216 0 0 1-40.738595 69.18919 339.691243 339.691243 0 0 1-57.399351 54.521081 1099.58227 1099.58227 0 0 1-65.148541 45.388108c-22.057514 13.533405-44.115027 26.928432-66.200216 40.12973-21.448649 12.869189-41.098378 26.568649-58.949189 41.015351a263.36173 263.36173 0 0 0-44.723892 45.775568c-6.752865 8.966919-12.149622 18.681081-16.19027 29.197837l-2.795243 8.025946h360.614054v103.783784H414.028108l1.190054-14.917189c3.431784-43.893622 11.208649-81.560216 23.413622-113.02746 12.177297-31.411892 27.731027-58.866162 46.661189-82.335135a351.065946 351.065946 0 0 1 63.571027-61.273946 883.878054 883.878054 0 0 1 71.956757-48.321729l25.876757-16.522379c8.302703-5.369081 16.245622-10.599784 23.856432-15.692108l11.180973-7.527784 17.60173-12.149621c21.946811-15.36 40.046703-30.803027 54.355027-46.27373a159.688649 159.688649 0 0 0 31.35654-48.570811c6.97427-17.186595 10.516757-37.445189 10.516757-60.775784 0-17.657081-3.26573-33.459892-9.741838-47.463783a116.182486 116.182486 0 0 0-26.402594-36.808649 113.110486 113.110486 0 0 0-38.856649-23.496649c-15.138595-5.535135-31.218162-8.302703-48.32173-8.302702-22.306595 0-41.070703 4.649514-56.486054 13.810162a120.278486 120.278486 0 0 0-39.133405 36.891675 159.079784 159.079784 0 0 0-22.528 52.80519 234.053189 234.053189 0 0 0-6.254703 50.646486l0.110703 10.24 0.442811 14.252973H435.891892l-0.719568-13.090594c-2.075676-38.08173 1.771243-73.53427 11.568433-106.219244 9.907892-32.989405 25.350919-61.606054 46.356757-85.794594 21.061189-24.243892 47.270054-43.229405 78.488216-56.873514C602.776216 20.618378 638.007351 13.837838 677.223784 13.837838z');
    this.childNodes = [path];
  }
}
