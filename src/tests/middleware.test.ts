import { Request, Response, NextFunction } from 'express';
import { canGet } from '../api/exemple/middleware';

describe('Middleware', () => {
  it('canGet deve chamar next()', () => {
    const mockReq = {} as Request;
    const mockRes = {} as Response;
    const mockNext = jest.fn() as NextFunction;

    canGet(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalled();
  });
});