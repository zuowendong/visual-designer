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
