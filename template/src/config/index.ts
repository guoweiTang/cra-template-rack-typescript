import { SettingsItem } from '../views/data';
// 运行环境配置项
let settings: SettingsItem;
export function getSettings(): SettingsItem {
  return settings;
}
export function setSettings(val: SettingsItem) {
  settings = val;
}
export const Colors: string[] = [
  'green',
  'gold',
  'volcano',
  'orange',
  'red',
  'geekblue',
  'cyan',
  'blue',
];
export const emailPattern = /^\w+@\w+\.\w+(\.\w+)?$/;
export const passwordPattern = /^(?=.*[a-z])(?=.*\d)[^]{6,20}$/;
