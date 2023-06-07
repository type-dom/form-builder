import { SvgBase } from '../../../web-element/web-abstract/svg-element/svg/svg.abstract';
import { HtmlElement } from '../../../web-element/web-abstract/html-element/html-element.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';

export class LogoSvg extends SvgBase {
  className: 'LogoSvg';
  childNodes: [SvgPath];
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'LogoSvg';
    this.addAttrObj({
      width: '212',
      height: '212',
      viewBox: '0 0 212 212',
    });
    const path = new SvgPath(this);
    path.setAttrObj({
      fill: '#192d79',
      opacity: '1.0',
    });
    path.setData('M 39.39 11.42 C 86.30 11.44 133.22 11.42 180.13 11.43 C 180.11 32.51 180.11 53.59 180.13 74.68 C 171.53 74.68 162.93 74.68 154.33 74.67 C 154.29 91.74 154.30 108.82 154.32 125.89 C 141.80 125.89 129.28 125.88 116.75 125.89 C 116.77 113.34 116.79 100.80 116.74 88.25 C 120.88 88.24 125.02 88.24 129.16 88.24 C 129.12 96.72 129.18 105.19 129.13 113.67 C 133.39 113.69 137.66 113.69 141.92 113.67 C 141.86 100.67 141.93 87.67 141.89 74.67 C 128.99 74.68 116.09 74.68 103.19 74.67 C 103.16 96.08 103.21 117.49 103.17 138.90 C 124.69 138.91 146.21 138.91 167.73 138.90 C 167.69 122.02 167.77 105.13 167.69 88.25 C 171.83 88.24 175.98 88.24 180.13 88.24 C 180.11 109.26 180.11 130.28 180.13 151.30 C 150.35 151.30 120.56 151.29 90.78 151.30 C 90.82 125.76 90.80 100.22 90.79 74.68 C 86.06 74.67 81.34 74.67 76.61 74.68 C 76.62 100.23 76.53 125.77 76.66 151.31 C 64.24 151.29 51.82 151.29 39.40 151.31 C 39.49 130.29 39.48 109.26 39.40 88.24 C 43.49 88.24 47.58 88.24 51.67 88.24 C 51.55 105.12 51.65 122.01 51.62 138.90 C 55.89 138.91 60.17 138.91 64.44 138.90 C 64.43 117.50 64.46 96.09 64.42 74.68 C 56.08 74.67 47.74 74.66 39.39 74.69 C 39.48 70.63 39.48 66.57 39.38 62.51 C 73.56 62.53 107.74 62.54 141.92 62.51 C 141.88 53.97 141.91 45.43 141.90 36.90 C 146.04 36.89 150.17 36.90 154.31 36.89 C 154.30 45.43 154.32 53.97 154.30 62.51 C 158.77 62.53 163.25 62.53 167.73 62.51 C 167.70 49.53 167.74 36.55 167.71 23.57 C 129.02 23.59 90.32 23.56 51.63 23.58 C 51.61 27.99 51.61 32.39 51.62 36.80 C 77.23 36.79 102.83 36.82 128.44 36.78 C 128.41 40.91 128.41 45.05 128.43 49.18 C 98.76 49.16 69.09 49.16 39.43 49.18 C 39.44 36.60 39.52 24.01 39.39 11.42 Z',
      'M 42.21 174.21 C 49.07 169.07 59.20 170.33 65.21 176.23 C 63.74 177.89 62.27 179.54 60.81 181.21 C 57.34 177.54 51.28 175.47 46.90 178.81 C 40.68 183.00 41.42 193.60 48.21 196.81 C 52.69 199.12 57.85 196.82 61.04 193.42 C 62.47 194.87 63.91 196.33 65.35 197.79 C 59.54 204.80 48.11 205.89 41.22 199.89 C 33.64 193.41 34.06 180.04 42.21 174.21 Z',
      'M 71.26 173.20 C 77.23 169.38 85.24 171.17 90.58 175.31 C 89.39 177.03 88.19 178.74 86.99 180.45 C 83.74 178.23 79.60 176.01 75.64 177.69 C 73.70 178.49 73.50 181.59 75.39 182.54 C 79.90 184.94 85.89 184.51 89.45 188.63 C 93.08 193.05 90.94 200.40 85.73 202.56 C 79.05 205.15 71.17 203.17 66.00 198.33 C 67.32 196.72 68.66 195.11 69.97 193.50 C 73.37 196.42 77.98 198.86 82.54 197.29 C 84.53 196.63 85.57 193.71 83.64 192.37 C 79.68 189.84 74.47 190.19 70.60 187.40 C 66.04 184.07 66.60 176.19 71.26 173.20 Z',
      'M 98.51 172.72 C 104.47 169.54 111.89 171.38 117.04 175.33 C 115.82 177.04 114.61 178.76 113.41 180.49 C 110.61 178.55 107.45 176.65 103.89 177.18 C 101.38 177.07 99.03 180.46 101.39 182.28 C 105.48 184.74 110.80 184.37 114.60 187.45 C 119.56 191.12 118.19 200.03 112.54 202.35 C 105.77 205.35 97.69 203.13 92.33 198.31 C 93.68 196.72 95.05 195.14 96.40 193.55 C 100.24 196.93 105.96 199.38 110.76 196.39 C 110.82 195.12 110.83 193.86 110.82 192.60 C 106.22 189.94 100.34 190.26 96.24 186.68 C 92.20 182.72 93.59 175.31 98.51 172.72 Z',
      'M 120.38 187.06 C 120.01 178.13 128.33 170.53 137.11 170.95 C 141.80 170.99 146.18 173.06 149.59 176.20 C 148.18 177.85 146.77 179.50 145.39 181.18 C 142.10 178.08 137.30 175.82 132.86 177.92 C 125.43 181.13 125.27 193.11 132.45 196.68 C 136.93 199.23 142.18 196.80 145.55 193.55 C 146.99 195.02 148.43 196.48 149.89 197.95 C 146.18 201.57 141.30 204.25 135.95 203.74 C 127.25 203.91 119.65 195.73 120.38 187.06 Z',
      'M 163.85 171.33 C 165.80 171.33 167.76 171.33 169.71 171.34 C 174.34 182.00 178.95 192.68 183.73 203.29 C 181.35 203.27 178.98 203.27 176.61 203.27 C 175.42 200.88 174.97 197.87 173.06 195.98 C 168.68 195.60 164.27 195.96 159.89 195.86 C 158.84 198.32 157.79 200.78 156.79 203.26 C 154.43 203.27 152.07 203.27 149.72 203.29 C 154.69 192.76 159.13 181.98 163.85 171.33 M 166.83 179.90 C 165.24 183.15 163.79 186.48 162.36 189.81 C 165.26 189.83 168.15 189.83 171.04 189.75 C 169.55 186.50 168.14 183.22 166.83 179.90 Z');
    this.childNodes = [path];
  }
}
