class FileConfig {
	public getAllBuildModule = () => {
		const buildInfoModules = import.meta.globEager('./**/buid.json');
		return buildInfoModules;
	};

	public createComponent = async (tag: string) => {
		// @ts-ignore
		const properties = await import(`./${tag}/properties.ts`);
		return properties.properties;
	};
}

export default new FileConfig();
