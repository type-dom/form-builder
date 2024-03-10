// import { fromEvent } from 'rxjs';
// import {
//   formJson,
//   tableJson,
//   oldFormJson,
//   oldFormData,
//   formData,
//   tableData,
//   taskJson,
//   taskData
// } from './form-data';
// import { TypeFormDesigner } from '../src/lib/type-form-designer';
// import './styles/index.scss';
// // 在页面中调用时
// fromEvent(document, 'DOMContentLoaded').subscribe(e => {
//   // console.log('form mode document DOMContentLoaded, e is ', e);
//   const formEl = document.querySelector('#fill-mode') as HTMLElement;
//   // console.log('formEl is ', formEl);
//   if (formEl) {
//     formEl.style.maxWidth = '800px';
//     formEl.style.margin = '0 auto';
//     const formDesigner = new TypeFormDesigner(formEl, 'fill');
//     console.log('formDesigner is ', formDesigner);
//
//     // 测试混合表单
//     formDesigner.createInstance(taskJson);
//     // 给控件配值
//     formDesigner.setFormData(taskData);
//     // 老数据
//     // formDesigner.createInstance(oldFormJson);
//     // // 给控件配值
//     // formDesigner.setFormData(oldFormData);
//     // 表格数据
//     // formDesigner.createInstance(tableJson);
//     // // 给控件配值
//     // formDesigner.setFormData(tableData);
//
//     // const tableControl = new TableControl(formDesigner.layout.webDocument.defaultPage, '我的表格', list);
//     // formDesigner.layout.webDocument.defaultPage.childNodes.push(tableControl);
//     // TypeForm.mode.setSelectedControl(TypeForm.currentPage.childNodes[0]); todo
//   }
// });
//
// // fromEvent(window, 'load').subscribe(e => {
// //   console.log('window onload is ', e);
// // });
