import React, {useState,useEffect} from 'react'
import "./Landing.scss";
import Characters from './Characters';
const Landing = () => {
   

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const imageUrl = await query({ "inputs": "Astronaut riding a horse" });
    //             console.log(imageUrl);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // async function query(data) {
    //     const response = await fetch(
    //         "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    //         {
    //             headers: {
    //                 "Accept": "image/png",
    //                 "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
    //                 "Content-Type": "application/json"
    //             },
    //             method: "POST",
    //             body: JSON.stringify(data),
    //         }
    //     );
    //     console.log(response.url);
    //     // const blob = await response.blob();
    //     // console.log(blob);
    //     // const imageURL = URL.createObjectURL(blob);
    //     // console.log(imageURL);
    //     const imageURL = response.url;
    //     return imageURL;
    // }

    

    return (
        <>
            <form className="search" 
            // onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Generated URL"
                    // disabled
                    readOnly
                />
                <div className="buttons">
                    <button type="submit">Generate URL</button>
                    <button type="reset" className="reset"
                    //  onClick={handleReset}>
                    >
                        Reset
                    </button>
                </div>
            </form>

            {/* {!comicData && characterData && characterData.results[0] && (
                <Characters data={characterData.results} onClick={getComicData} />
            )} */}
            <Characters/>


        </>
    );
}

export default Landing