import React from 'react'
import useFetch from '../../Hooks/useFetch'
import './Featured.css'
function Featured() {


    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
    return (
        <div className="featured">
            {loading ? ("Loading please wait") : (<> <div className="featuredItem">
                <img src="https://imgs.search.brave.com/-IL0FTFA7X54Uzhlya7YragvO-BA_6HfgZqlbS8yiEA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Y29tZXN0YXJlaXpl/bi5ubC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9iaWdz/dG9jay1EdWJsaW4t/SXJlbGFuZC1OaWdo/dC1WaWV3LU9mLTI0/NjgyMzMyNy5qcGc" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h1>{data[0]} Properties</h1>
                </div>
            </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://imgs.search.brave.com/DB08i6xmowjwhWrSVkldhr2PaJhYCqKDHO83xvXvpD0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aGFjYW5ldC5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDIvYmlnc3RvY2st/QXVzdGluLVRleGFz/LVVTQS1kb3dudG93/bi1zay0yMjE4Mzc3/NDYuanBn" alt="" />
                    <div className="featuredTitles">
                        <h1>Madrid</h1>
                        <h1>{data[1]} Properties</h1>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://imgs.search.brave.com/60nYuS4tB737uSIYSAYtM7lEjZes1AIkjiFw4Gr_mfE/rs:fit:1200:720:1/g:ce/aHR0cDovL2Nkbi5h/YXJwLm5ldC9jb250/ZW50L2RhbS90cmF2/ZWwvZGVzdGluYXRp/b24taW1hZ2VzL3Jl/bm8vMjAxNC0wMS8x/NDAwLXJlbm8tbnYt/YWVyaWFsLmltZ2Nh/Y2hlLnJldjE0MDkz/MjExNzk0MjAud2Vi/LmpwZw" alt="" />
                    <div className="featuredTitles">
                        <h1>London</h1>
                        <h1>{data[2]} Properties</h1>
                    </div>
                </div> </>)}
        </div>
    )
}

export default Featured