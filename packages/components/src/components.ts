class FileConfig {
	public getAllBuildModule = () => {
		const buildInfoModules = import.meta.globEager('./**/buid.json');
		return buildInfoModules;
	};

	public getComponentProps = async (tag: string) => {
		// @ts-ignore
		const properties = await import(`./${tag}/properties.ts`);
		// TODO: 统一设置 基本配置[width, height, top, left]
		return properties.properties;
	};

	public fetchComponent = async (tag: string) => {
		// @ts-ignore
		const modules = await import(`./${tag}/index.vue`);
		return modules;
	};
}

export default new FileConfig();
