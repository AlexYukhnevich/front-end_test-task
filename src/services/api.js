class Api {
  outputError = (error) => {
    console.error(error);
  }

  sendRequest = async (request) => {
    try {
      const res = await request;
      return res.data;
    } catch (error) {
      if (error.response) {
        this.outputError(error.response.data.message);
      }
      this.outputError(error);
      return { success: false, message: 'Something went wrong!' };
    }
  }
}

export default Api;