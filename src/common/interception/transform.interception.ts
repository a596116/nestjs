import { CallHandler, ExecutionContext, Injectable, NestInterceptor, } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // 格式化日期
        return next.handle().pipe(
            map((data) => {
                data.data.rows[0].createdAt = data.data.rows[0].createdAt.toLocaleString()
                return data
            }),
        )
    }
}