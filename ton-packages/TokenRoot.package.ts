export default {"abi":{"ABI version":2,"header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"components":[{"name":"name","type":"bytes"},{"name":"symbol","type":"bytes"},{"name":"icon","type":"bytes"},{"name":"desc","type":"bytes"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint128"}],"name":"tokenRootData","type":"tuple"},{"name":"pubkeyOwner","type":"uint256"},{"name":"addrOwner","type":"address"}],"outputs":[]},{"name":"uploadTokenWalletCode","inputs":[{"name":"codeTokenWallet","type":"cell"}],"outputs":[]},{"name":"deployTokenWallet","inputs":[{"name":"pubkeyOwner","type":"uint256"},{"name":"addrOwner","type":"address"},{"name":"initialAmount","type":"uint128"}],"outputs":[]},{"name":"grant","inputs":[{"name":"addrTokenWallet","type":"address"},{"name":"amount","type":"uint128"}],"outputs":[]},{"name":"burn","inputs":[{"name":"amount","type":"uint128"}],"outputs":[]},{"name":"resolveTokenWallet","inputs":[{"name":"addrTokenRoot","type":"address"},{"name":"pubkeyOwner","type":"uint256"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"addrTokenWallet","type":"address"}]},{"name":"_codeTokenWallet","inputs":[],"outputs":[{"name":"_codeTokenWallet","type":"cell"}]},{"name":"_tokenRootData","inputs":[],"outputs":[{"components":[{"name":"name","type":"bytes"},{"name":"symbol","type":"bytes"},{"name":"icon","type":"bytes"},{"name":"desc","type":"bytes"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint128"}],"name":"_tokenRootData","type":"tuple"}]},{"name":"_pubkeyOwner","inputs":[],"outputs":[{"name":"_pubkeyOwner","type":"uint256"}]},{"name":"_addrOwner","inputs":[],"outputs":[{"name":"_addrOwner","type":"address"}]},{"name":"_totalGranted","inputs":[],"outputs":[{"name":"_totalGranted","type":"uint128"}]}],"data":[],"events":[]},"image":"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"}