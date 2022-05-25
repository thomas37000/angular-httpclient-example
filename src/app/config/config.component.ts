showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          apiDogsUrl: data.apiDogsUrl,
          textfile:  data.textfile,
          date: data.date,
      });
  }

  export interface Config {
    apiDogsUrl: string;
    textfile: string;
    date: any;
  }