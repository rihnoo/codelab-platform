export abstract class IUseCase<IRequest = void, IResponse = void> {
  execute(request: IRequest): Promise<IResponse> | IResponse {
    console.log('Executing Use Case:', this.constructor, request)

    return this._execute(request)
  }

  protected abstract _execute(request: IRequest): Promise<IResponse> | IResponse
}