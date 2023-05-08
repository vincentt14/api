<?php

namespace App\Http\Middleware;

use App\Models\Post;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class PemilikPostingan
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $currentUser = Auth::user();
        // return response()->json($currentUser->id);
        $post = Post::findOrFail($request->id);
        // return response()->json($post->author);
        
        if($post->author !== $currentUser->id){
            return response()->json(['message' => 'data not found'], 404);
        }

        return $next($request);
    }
}
