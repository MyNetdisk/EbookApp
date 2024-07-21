import RNFS from 'react-native-fs';
import {Platform} from 'react-native';

export const defaultPath =
  Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;
export const testPath = defaultPath + '/test'; // For testing purposes

/**
 * 文件工具类，用于处理文件操作。
 */
class FileUtil {
  private static instance: FileUtil;

  private constructor() {
    // 私有构造函数，防止外部实例化
  }

  /**
   * 获取FileUtil的单例实例。
   * @returns {FileUtil} FileUtil的单例实例。
   */
  public static getInstance(): FileUtil {
    if (!FileUtil.instance) {
      FileUtil.instance = new FileUtil();
    }
    return FileUtil.instance;
  }

  /**
   * 检查指定路径的文件是否存在。
   * @param {string} path - 要检查的文件路径。
   * @param {Function} [cb] - 文件存在性检查完成后的回调函数。
   * @returns {Promise<boolean>} - 返回一个Promise，表示文件是否存在。
   */
  public async isExistFile(
    path: string,
    cb?: (res: boolean) => {},
  ): Promise<boolean> {
    return await RNFS.exists(path).then(res => {
      cb && cb(res);
      return res;
    });
  }

  /**
   * 读取指定路径下的文件内容。
   * @param {string} path - 要读取的文件路径。
   * @param {string} name - 文件名。
   * @param {Function} successCallback - 文件读取成功后的回调函数。
   * @param {Function} failCallback - 文件读取失败后的回调函数。
   * @returns {Promise<{name: string, data: string}>} - 返回一个Promise，表示文件读取结果。
   */
  public async readFile(
    path: string,
    name: string,
    successCallback: (res: any) => {},
    failCallback: (err: any) => {},
  ): Promise<void | {name: string; data: string}> {
    const isExistFile = await this.isExistFile(path);
    if (!isExistFile) return;
    return await RNFS.readFile(path, 'utf8')
      .then(res => {
        successCallback && successCallback(res);
        return {
          name,
          data: res,
        };
      })
      .catch(err => {
        failCallback && failCallback(err.message);
      });
  }
  async readDir() {
    const res = await RNFS.readDir(defaultPath);
    console.log(res);
  }
}

export default FileUtil.getInstance(); // 导出FileUtil的单例实例
