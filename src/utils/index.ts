/**
 * Nullを除去するハンドラー関数（filter関数とセットで使う）
 * ex. [1, 2, null].filter(omitNullableHandler)
 * @param item - 項目
 */
export function omitNullableHandler<T>(item: T): item is NonNullable<T> {
  return item != null;
}

/**
 * 型がついたObject.keys
 * @param obj - オブジェクト
 */
export function typedKeys<T>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}
