export default definePayloadPlugin(() => {

  // definePayloadReducer: サーバーサイドのデータ（例えば、クラスインスタンスなど）をクライアントに渡す際に、そのデータを「軽量化」する処理を定義しています。
  // ここでは、AwesomeFrameworkクラスのインスタンスを特定し、その name プロパティだけを返すことで、サーバーからクライアントへの通信時のデータ量を最小限に抑えます。
  definePayloadReducer('AwesomeFramework', data => {
    // AwesomeFrameworkクラスを特定して、サーバーサイドでそのデータを取得します。
    if(data instanceof AweSomeFramework) {
      return {
        name: data.name
      }
    }
  })

  // definePayloadReviver: クライアントサイドで、受け取った軽量化されたデータ（例えば、JSON形式のオブジェクト）を元に、元のクラスインスタンスを再生成（復元）する処理を定義しています。
  // ここでは、サーバーから受け取ったデータのnameプロパティを使って、新しいAwesomeFrameworkクラスのインスタンスを作成しています。
  definePayloadReviver('AwesomeFramework', (data) => {
    return new AweSomeFramework(data.name)
  })
})
