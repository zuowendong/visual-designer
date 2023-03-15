/**
 * 待重构
 *
 * Q: 使用这种文件引入的方式，当有的组件不存在当前文件时候不方便做容错处理
 *
 * A: 写一个 class StaticData -> fun setLabelStaticData 在每个组件的 index.ts 中 使用  生成各配置文件的数据
 * 
		staticData.setLabelStaticData(label, {
				version,
				properties,
				events,
				data,
				control,
				functions,
				dependencies,
		});
 */

class FileConfig {
	public getAllBuildModule = () => {
		const buildInfoModules = import.meta.globEager('./**/build.json');
		return buildInfoModules;
	};

	public getComponentProps = async (tag: string) => {
		// @ts-ignore
		const file = await import(`./${tag}/properties.ts`);
		return file.properties;
	};

	public fetchComponent = async (tag: string) => {
		// @ts-ignore
		const modules = await import(`./${tag}/index.vue`);
		return modules;
	};
}

export default new FileConfig();
