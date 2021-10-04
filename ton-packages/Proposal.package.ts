export default {"abi":{"ABI version":2,"header":["time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"title","type":"bytes"},{"name":"totalVotes","type":"uint128"},{"name":"addrClient","type":"address"},{"name":"proposalType","type":"bytes"},{"name":"specific","type":"cell"},{"name":"codePadawan","type":"cell"},{"name":"addrsPadawan","type":"address[]"}],"outputs":[]},{"name":"wrapUp","inputs":[],"outputs":[]},{"name":"vote","inputs":[{"name":"addrPadawanOwner","type":"address"},{"name":"choice","type":"bool"},{"name":"votes","type":"uint128"}],"outputs":[]},{"name":"queryStatus","inputs":[],"outputs":[]},{"name":"resolvePadawan","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"addrPadawan","type":"address"}]},{"name":"_addrRoot","inputs":[],"outputs":[{"name":"_addrRoot","type":"address"}]},{"name":"_id","inputs":[],"outputs":[{"name":"_id","type":"uint32"}]},{"name":"_data","inputs":[],"outputs":[{"components":[{"name":"title","type":"bytes"},{"name":"proposalType","type":"bytes"},{"name":"specific","type":"cell"},{"name":"client","type":"address"},{"name":"state","type":"uint8"},{"name":"start","type":"uint32"},{"name":"end","type":"uint32"},{"name":"votesFor","type":"uint128"},{"name":"votesAgainst","type":"uint128"},{"name":"totalVotes","type":"uint128"},{"name":"addrsPadawan","type":"address[]"}],"name":"_data","type":"tuple"}]},{"name":"_results","inputs":[],"outputs":[{"components":[{"name":"completed","type":"bool"},{"name":"passed","type":"bool"},{"name":"votesFor","type":"uint128"},{"name":"votesAgainst","type":"uint128"},{"name":"totalVotes","type":"uint256"},{"name":"model","type":"uint8"}],"name":"_results","type":"tuple"}]},{"name":"_voteCountModel","inputs":[],"outputs":[{"name":"_voteCountModel","type":"uint8"}]}],"data":[{"key":1,"name":"_id","type":"uint32"}],"events":[]},"image":"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"}